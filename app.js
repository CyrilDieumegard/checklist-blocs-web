const storageKey = "checklist-lilipass-v2";

const blocks = [
  {
    id: "module-1-1-bloc-1",
    tab: "1.1 Bloc 1",
    eyebrow: "Module 1.1",
    title: "Configuration machine + quick win",
    context: "Présence de Sébastien indispensable : ce sont ses comptes.",
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
    tab: "1.1 Bloc 2",
    eyebrow: "Module 1.1",
    title: "GitHub et lecture du code",
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
    tab: "1.1 Bloc 3",
    eyebrow: "Module 1.1",
    title: "Adyen",
    tasks: [
      "Création d'un utilisateur dédié et d'une clé API Adyen en lecture",
      "Connexion d'Adyen via son MCP officiel",
      "Démonstration : interroger les données de paiement en langage naturel",
      "Tests et questions"
    ]
  },
  {
    id: "module-1-2",
    tab: "1.2",
    eyebrow: "Module 1.2",
    title: "Créer des outils sur mesure",
    context: "Objectif : fabriquer des outils internes simples selon les besoins réels de l'équipe.",
    tasks: [
      "Lister les besoins prioritaires de visibilité business",
      "Choisir un premier outil à construire",
      "Définir les sources de données nécessaires : Odoo, Adyen ou autre",
      "Créer un dashboard chiffre d'affaires",
      "Afficher les chiffres clés en temps réel ou quasi réel",
      "Créer une vue ventes par soirée",
      "Créer une vue ventes par produit",
      "Créer une vue ventes par événement",
      "Documenter comment demander un nouvel outil à Codex",
      "Tester l'outil avec un cas réel",
      "Noter les améliorations et quick wins suivants"
    ]
  },
  {
    id: "module-1-3",
    tab: "1.3",
    eyebrow: "Module 1.3",
    title: "Agent technique",
    context: "Objectif : mettre en place un copilote technique permanent, avec validation humaine avant toute action sensible.",
    tasks: [
      "Définir le périmètre de l'agent technique",
      "Configurer l'agent dédié au code",
      "Lui donner accès au dépôt GitHub utile",
      "Faire générer une documentation du projet",
      "Faire lancer une analyse de bugs potentiels",
      "Faire proposer des tests utiles",
      "Définir les actions interdites sans validation humaine",
      "Créer une procédure de revue avant modification du code",
      "Tester l'agent sur une vraie demande de maintenance",
      "Documenter le mode d'emploi pour l'équipe"
    ]
  },
  {
    id: "module-2-1",
    tab: "2.1",
    eyebrow: "Module 2.1",
    title: "Agent personnel de Sébastien",
    context: "Objectif : accès aux chiffres réels depuis le téléphone, avec validation humaine sur les actions sensibles.",
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
    tab: "2.2",
    eyebrow: "Module 2.2",
    title: "Agent de TIBER",
    context: "Objectif : suivi de projet, procédures, Odoo et support interne, avec validation humaine sur toute action sensible.",
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
  },
  {
    id: "transition-marque-blanche",
    tab: "Transition",
    eyebrow: "Accompagnement",
    title: "Transition marque blanche",
    context: "Objectif : guider l'équipe pour rendre l'application transmissible, sans reprendre le rôle de développeur produit.",
    tasks: [
      "Clarifier l'objectif marque blanche",
      "Identifier les parties de l'application à documenter",
      "Faire produire une documentation du code par Codex",
      "Repérer les zones à structurer ou clarifier",
      "Définir les jalons de transition",
      "Accompagner l'équipe dans le pilotage de Codex",
      "Vérifier que l'équipe comprend les changements proposés",
      "Séparer formation, pilotage et développement applicatif",
      "Documenter les décisions prises à chaque jalon",
      "Faire un point régulier sur ce qui reste hors périmètre"
    ]
  },
  {
    id: "module-3",
    tab: "3",
    eyebrow: "Module 3",
    title: "Outils IA métier",
    context: "Objectif : gagner du temps sur les tâches récurrentes sans développement lourd.",
    tasks: [
      "Choisir les outils IA métier vraiment utiles",
      "Configurer les comptes rendus de réunion avec Granola",
      "Définir le format de compte rendu attendu",
      "Tester une réunion réelle",
      "Explorer les usages voix et vidéos marketing",
      "Tester un outil TTS pour une narration courte",
      "Tester HeyGen ou équivalent pour une vidéo simple",
      "Brancher ou auditer les analytics app et site",
      "Identifier DataFast, PostHog ou l'outil prioritaire",
      "Créer une mini procédure pour chaque outil retenu"
    ]
  },
  {
    id: "module-4",
    tab: "4",
    eyebrow: "Module 4",
    title: "Veille technologique",
    context: "Objectif : garder l'équipe à jour sans qu'elle doive suivre toute l'actualité IA.",
    tasks: [
      "Définir le rythme du rendez-vous de veille",
      "Créer une liste de sources à suivre",
      "Préparer un format de synthèse mensuelle",
      "Lister les nouveautés modèles importantes",
      "Lister les nouveautés outils importantes",
      "Identifier les évolutions utiles pour Codex",
      "Identifier les évolutions utiles pour les agents",
      "Prévoir un point de mise à jour des outils existants",
      "Conserver une trace des décisions de veille",
      "Transformer les nouveautés utiles en prochaines actions"
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

function renderShell() {
  const tabs = document.getElementById("tabs");
  const blocksContainer = document.getElementById("blocks");

  tabs.replaceChildren();
  blocksContainer.replaceChildren();

  blocks.forEach((block, index) => {
    const tab = document.createElement("button");
    tab.className = `tab${index === 0 ? " is-active" : ""}`;
    tab.type = "button";
    tab.dataset.block = block.id;
    tab.setAttribute("aria-selected", String(index === 0));
    tab.textContent = block.tab;
    tabs.append(tab);

    const article = document.createElement("article");
    article.className = `block${index === 0 ? " is-active" : ""}`;
    article.id = block.id;

    const head = document.createElement("div");
    head.className = "block-head";

    const titleWrap = document.createElement("div");
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = block.eyebrow;

    const title = document.createElement("h2");
    title.textContent = block.title;
    titleWrap.append(eyebrow, title);

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.dataset.badge = block.id;
    badge.textContent = "0%";
    head.append(titleWrap, badge);
    article.append(head);

    if (block.context) {
      const context = document.createElement("p");
      context.className = "context";
      context.textContent = block.context;
      article.append(context);
    }

    const list = document.createElement("div");
    list.className = "task-list";
    list.dataset.list = block.id;
    article.append(list);
    blocksContainer.append(article);
  });
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

renderShell();
renderTasks();
setupTabs();
setupNotes();
setupReset();
setupSync();
updateProgress();
