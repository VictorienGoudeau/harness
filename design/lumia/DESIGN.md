# Lumia — note de conception

Maquettes interactives : https://claude.ai/artifact/TrswaRKH7askDrcZ9fLCTS
(canevas privé ; à partager depuis le menu Partager de la page.)

Lumia est l'assistant de travail de l'entreprise : conversation et travaux
délégués, pas de code. Les sources des planches sont dans `source/`
(format `.dc.html`, un fichier par écran, `canvas.json` pour la disposition).

## Direction : « éditoriale lumineuse »

- **Papier et encre.** Fond papier chaud (`#F8F7F4`), panneaux lin
  (`#F1EFEA`, rail `#E8E5DE`), filets `#E0DCD3`, encre `#19181C`.
- **Une seule couleur vive.** L'ambre « Lumen » (`#C8961E`) n'apparaît que
  pour ce qui est vivant : la marque, une tâche en cours, une demande
  d'accord. En texte, sa version profonde (`#875F0E`) tient le contraste.
  Halo `#F6EEDC` pour les teintes douces. Mousse `#2E6B4E` = terminé,
  Brique `#A4382A` = interrompu ou erreur.
- **Typographie.** Newsreader (titres, voix de Lumia, 20–88 px) sur
  Instrument Sans (interface et lecture, 11–16 px). Étiquettes en capitales
  11 px espacées. Aucune police mono : l'outil n'affiche pas de code.
- **Des filets, pas des boîtes.** Les listes sont séparées par des traits
  d'un pixel. La carte blanche est réservée au composeur, aux livrables et
  aux demandes d'accord.
- **La marge parle.** La transcription est un script en deux colonnes :
  locuteur et heure dans la marge gauche (112 px), texte à droite. Pas de
  bulles.
- **Rayons.** 10 px contrôles, 14–16 px cartes, pleins pour les pastilles.
  Icônes au trait 18 px / 1,5, jamais d'émoji.

## Structure

Rail d'icônes 64 px (Accueil, Conversations, Travaux, Espaces ; Réglages et
compte en bas) → panneau contextuel 264 px (liste du module) → scène
centrale (colonne de 760 px pour la lecture) → panneau « Contexte » 320 px
(espace, sources, livrables, mémoire, autorisations).

Le composeur porte le choix du mode (**Conversation** / **Travail**), les
sources attachées, le niveau de réponse (« Lumia Précis ») et la dictée.

## Mode Travail

Une tâche = une demande, un plan validé, des étapes avec leurs actions, des
livrables, et des demandes d'accord en ligne (« Autoriser une fois »,
« Toujours pour ce travail », « Refuser »). L'ambre pulse sur l'étape en
cours ; les étapes faites sont des disques d'encre ; les étapes à venir des
anneaux gris numérotés.

## Planches

| Fichier | Écran |
|---|---|
| `Systeme.dc.html` | Identité, couleurs, typographie, composants |
| `Connexion.dc.html` | Connexion (SSO + lien par e-mail) |
| `Main.dc.html` | Accueil |
| `Conversation.dc.html` | Conversation avec sources et livrable |
| `Travail.dc.html` | Travail en cours, plan, demande d'accord |
| `Espaces.dc.html` | Espace « Direction Juridique » : connaissances, règles |
| `Travaux.dc.html` | Vue d'ensemble des travaux |
| `Reglages.dc.html` | Connecteurs et autorisations |
| `MobileAccueil.dc.html`, `MobileConversation.dc.html`, `MobileTravail.dc.html` | Mobile |
| `Nuit.dc.html` | Conversation en mode nuit |

Les contenus (noms, documents, clauses) sont des exemples ; `[Entreprise]`
et `[Fournisseur]` marquent ce qui reste à remplacer.
