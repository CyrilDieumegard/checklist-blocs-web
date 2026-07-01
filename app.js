const storageKey = "checklist-lilipass-v2";

const blocks = [
  {
    id: "module-1-1-bloc-1",
    tasks: [
      "Déballage et branchement du Mac mini",
      "Démarrage et connexion wifi",
      "Connexion à l'adresse Gmail de l'agent",
      "Création du compte Apple de la machine avec l'adresse dédiée",
      "Connexion du Mac au compte Apple et vérification qu'aucun compte personnel n'est mélangé",
      "Création du compte ChatGPT avec un plan simple au départ",
      "Clarification de la règle de propriété : machine dédiée, clés détenues par Sébastien, accès employés délégués et révocables",
      "Installation de Codex avec explication de chaque étape",
      "Connexion de Codex au compte",
      "Tour de l'interface et fonctionnement concret",
      "Récupération de l'URL Odoo et génération de la clé API",
      "Connexion Odoo via MCP et démo avec une question métier",
      "Essai par les participants et questions",
      "Récap de ce qui est en place"
    ]
  },
  {
    id: "module-1-1-bloc-2",
    tasks: [
      "Connexion au compte GitHub",
      "Liaison de Codex avec GitHub",
      "Audit du code par Codex : structure, dépendances, état général et compréhension du dépôt",
      "Lecture des résultats ensemble : code complet ou tronqué",
      "Méthode branches + validation avant application, sans modification tant que le dépôt n'est pas sûr",
      "Manipulations refaites par les participants",
      "Récap et prochaines étapes",
      "Point de fin de session"
    ]
  },
  {
    id: "module-1-1-bloc-3",
    tasks: [
      "Création d'un utilisateur dédié et d'une clé API Adyen en lecture",
      "Connexion d'Adyen via son MCP officiel",
      "Démonstration : interroger les données de paiement en langage naturel",
      "Tests et questions"
    ]
  },
  {
    id: "module-2-1",
    tasks: [
      "Installer OpenClaw sur la machine privée de Sébastien",
      "Brancher les MCP utiles",
      "Connecter l'agent à la messagerie utilisée depuis le téléphone",
      "Configurer les accès nécessaires en lecture pour consulter les chiffres",
      "Tester la demande mobile : chiffres de la soirée",
      "Vérifier que l'agent répond avec des données réelles et compréhensibles",
      "Configurer la mémoire de travail de Sébastien : préférences, décisions, façon de piloter",
      "Définir les alertes utiles : factures oubliées, paiements bloqués, fuites d'argent, postes à optimiser",
      "Poser la règle de sécurité : validation humaine obligatoire sur actions sensibles",
      "Récap des ajustements à faire après la première utilisation"
    ]
  },
  {
    id: "module-2-2",
    tasks: [
      "Créer l'agent dédié à TIBER",
      "Définir le périmètre : suivi de projet, procédures, Odoo et support interne",
      "Brancher les MCP et sources utiles",
      "Configurer les procédures et informations de référence",
      "Créer les routines de suivi : tâches ouvertes, relances, décisions, prochaines étapes",
      "Tester une demande de support interne",
      "Tester un cas Odoo sans action sensible automatique",
      "Configurer la mémoire de travail de TIBER",
      "Poser la règle de sécurité : validation humaine obligatoire sur actions sensibles",
      "Récap des usages quotidiens à garder"
    ]
  }
];

const defaultState = {
  checked: {},
  notes: "",
  updatedAt: 0
};

let state = loadState();

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadState() {
  return { ...defaultState, ...readJson(storageKey, {}) };
}

function saveState() {
  state.updatedAt = Date.now();
  writeJson(storageKey, state);
}

function taskId(blockId, index) {
  return `${blockId}-${index}`;
}

function renderTasks() {
  blocks.forEach((block) => {
    const list = document.querySelector(`[data-list="${block.id}"]`);
    list.replaceChildren();

    block.tasks.forEach((label, index) => {
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
      text.className = "label";
      text.textContent = label;

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
  document.getElementById("overallProgress").style.width = total ? `${Math.round((done / total) * 100)}%` : "0%";

  blocks.forEach((block) => {
    const blockDone = block.tasks.filter((_, index) => state.checked[taskId(block.id, index)]).length;
    const percent = block.tasks.length ? Math.round((blockDone / block.tasks.length) * 100) : 0;
    document.querySelector(`[data-badge="${block.id}"]`).textContent = `${percent}%`;
  });
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.block;
      document.querySelectorAll(".tab").forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
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
    state = { ...defaultState, checked: {}, updatedAt: Date.now() };
    writeJson(storageKey, state);
    renderTasks();
    document.getElementById("notes").value = "";
    updateProgress();
    setSyncStatus("Mémoire réinitialisée sur cet appareil.");
  });
}

function setSyncStatus(message) {
  document.getElementById("syncStatus").textContent = message;
}

function encodeMemory() {
  const payload = {
    version: 1,
    state
  };
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
}

function decodeMemory(code) {
  const payload = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
  if (!payload?.state || typeof payload.state !== "object") {
    throw new Error("format invalide");
  }
  return payload.state;
}

function applyImportedState(importedState) {
  state = { ...defaultState, ...importedState, updatedAt: Date.now() };
  writeJson(storageKey, state);
  renderTasks();
  document.getElementById("notes").value = state.notes || "";
  updateProgress();
}

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  return false;
}

function setupSync() {
  const memoryCode = document.getElementById("memoryCode");

  document.getElementById("copyMemoryButton").addEventListener("click", async () => {
    const code = encodeMemory();
    memoryCode.value = code;
    memoryCode.select();

    const copied = await copyToClipboard(code).catch(() => false);
    setSyncStatus(copied ? "Mémoire copiée. Colle-la sur l'autre appareil." : "Mémoire prête. Copie le texte sélectionné.");
  });

  document.getElementById("importMemoryButton").addEventListener("click", async () => {
    try {
      if (!memoryCode.value.trim() && navigator.clipboard?.readText) {
        memoryCode.value = await navigator.clipboard.readText();
      }
      const importedState = decodeMemory(memoryCode.value);
      applyImportedState(importedState);
      setSyncStatus("Mémoire importée dans ce navigateur.");
    } catch {
      setSyncStatus("Mémoire illisible. Copie-colle le bloc complet depuis l'autre appareil.");
    }
  });
}

renderTasks();
setupTabs();
setupNotes();
setupReset();
setupSync();
updateProgress();
