# Checklist Lilipass

Petit outil web statique pour suivre les modules d'intervention Lilipass depuis téléphone ou ordinateur.

## Fonctionnalités

- Checklist module 1.1 : configuration machine, GitHub/code, Adyen
- Checklist module 2.1 : agent personnel de Sébastien
- Checklist module 2.2 : agent de Sabina
- Progression globale et progression par bloc
- Sauvegarde automatique dans le navigateur avec `localStorage`
- Mémoire partagée optionnelle entre appareils via Gist privé GitHub
- Notes rapides
- Interface responsive mobile

## Utilisation

Ouvrir `index.html` dans un navigateur, ou publier le dossier sur GitHub Pages / Netlify / Vercel.

Pour synchroniser entre téléphone et ordinateur :

1. Créer un token GitHub classique avec le scope `gist`.
2. Coller le token dans le panneau "Mémoire".
3. Cliquer sur "Activer la mémoire".
4. Réutiliser le même token sur les autres appareils.
