const storageKey = "checklist-blocs-mac-mini-v1";

const blocks = [
  {
    id: "bloc-1",
    tasks: [
      ["9h00", "Déballage et branchement du Mac mini"],
      ["9h10", "Démarrage, connexion wifi"],
      ["9h15", "Connexion à l'adresse Gmail de l'agent"],
      ["9h25", "Création du compte Apple de la machine sur cette adresse, numéro de Sébastien en confiance"],
      ["9h45", "Connexion du Mac au compte Apple, vérification qu'aucun compte perso n'est mélangé"],
      ["9h55", "Création du compte ChatGPT, plan simple au départ"],
      ["10h10", "Règle de propriété : machine avec sa propre identité, clés détenues par Sébastien, accès employés délégués révocables"],
      ["10h25", "Pause 10h25-10h35"],
      ["10h35", "Installation de Codex, explication de chaque étape"],
      ["10h55", "Connexion de Codex au compte"],
      ["11h10", "Tour de l'interface et fonctionnement concret"],
      ["11h30", "Récupération de l'URL Odoo et génération de la clé API"],
      ["11h50", "Connexion Odoo via MCP, explication du MCP, puis démo en direct avec une question métier"],
      ["12h15", "Essai par les participants, questions"],
      ["12h45", "Récap de ce qui est en place"]
    ]
  },
  {
    id: "bloc-2",
    tasks: [
      ["14h00", "Connexion au compte GitHub"],
      ["14h20", "Liaison de Codex avec GitHub"],
      ["14h40", "Audit du code par Codex : structure, présent, manques éventuels, vraie compréhension du dépôt"],
      ["15h30", "Lecture des résultats ensemble : code complet ou tronqué"],
      ["16h00", "Méthode branches + validation avant application, sans modification tant que le dépôt n'est pas sûr"],
      ["16h45", "Manipulations refaites par les participants"],
      ["17h15", "Récap et prochaines étapes"],
      ["17h45", "Point sur les heures"]
    ]
  },
  {
    id: "bloc-3",
    tasks: [
      ["", "Création d'un utilisateur dédié et d'une clé API Adyen en lecture"],
      ["", "Connexion d'Adyen via son MCP officiel"],
      ["", "Démonstration : interroger les données de paiement en langage naturel"],
      ["", "Tests et questions"]
    ]
  }
];

const defaultState = {
  checked: {},
  notes: ""
};

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey)) };
  } catch {
    return { ...defaultState };
  }
}

let state = loadState();

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function taskId(blockId, index) {
  return `${blockId}-${index}`;
}

function renderTasks() {
  blocks.forEach((block) => {
    const list = document.querySelector(`[data-list="${block.id}"]`);
    list.innerHTML = "";

    block.tasks.forEach(([time, label], index) => {
      const id = taskId(block.id, index);
      const row = document.createElement("label");
      row.className = `task${state.checked[id] ? " is-done" : ""}`;
      row.htmlFor = id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = Boolean(state.checked[id]);
      checkbox.addEventListener("change", () => {
        state.checked[id] = checkbox.checked;
        row.classList.toggle("is-done", checkbox.checked);
        saveState();
        updateProgress();
      });

      const text = document.createElement("span");
      text.className = "task-text";
      text.innerHTML = `${time ? `<span class="time">${time}</span>` : ""}<span class="label">${label}</span>`;

      row.append(checkbox, text);
      list.append(row);
    });
  });
}

function updateProgress() {
  const total = blocks.reduce((sum, block) => sum + block.tasks.length, 0);
  const done = blocks.reduce((sum, block) => {
    return sum + block.tasks.filter((_, index) => state.checked[taskId(block.id, index)]).length;
  }, 0);

  document.getElementById("doneCount").textContent = done;
  document.getElementById("totalCount").textContent = total;
  document.getElementById("overallProgress").style.width = `${Math.round((done / total) * 100)}%`;

  blocks.forEach((block) => {
    const blockDone = block.tasks.filter((_, index) => state.checked[taskId(block.id, index)]).length;
    const percent = Math.round((blockDone / block.tasks.length) * 100);
    document.querySelector(`[data-badge="${block.id}"]`).textContent = `${percent}%`;
  });
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.block;
      document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item === tab));
      document.querySelectorAll(".block").forEach((block) => block.classList.toggle("is-active", block.id === target));
    });
  });
}

function setupNotes() {
  const notes = document.getElementById("notes");
  notes.value = state.notes || "";
  notes.addEventListener("input", () => {
    state.notes = notes.value;
    saveState();
  });
}

function setupReset() {
  document.getElementById("resetButton").addEventListener("click", () => {
    if (!confirm("Réinitialiser toutes les cases et les notes ?")) return;
    state = { ...defaultState, checked: {} };
    saveState();
    renderTasks();
    setupNotes();
    updateProgress();
  });
}

renderTasks();
setupTabs();
setupNotes();
setupReset();
updateProgress();
