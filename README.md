# kivient

Application communautaire permettant d'organiser diverses sorties entre étudiants d'une même école.


## Blocages techniques

- La géolocalisation sur les deux devices (iOS et android)

- Storage : sous android il n'y a qu'un champs qui est sauvegardé



## Solutions techniques

- iOS : paramétrer l'emulator, aller dans Debug > location et cochez City Run

- Android : configurez un nouvel emulator dans studio android ou installer un driver et faire la démo sur un téléphone

- Storage : conflit entre le programme de debugage sous android et le device


## Problèmes

- Mauvaise compréhension du Business Model Canvas (notamment pour les ressources)

- Mauvaise estimation de certaines tâches

- La recherche d'utilisation "Device Orientation" et rédaction de la user story


## Solutions

- Les ressources sont les compétences, les outils et les personnes requises pour mener à bien le projet

- Prendre plus de temps pour estimer chaque tâche et dans le doute vérifier techniquement avant d'estimer

- Nous allons afficher un message lorsque l'utilisateur tourne son écran pour lui indiquer qu'il aura une meilleure visibilité à la verticale



## Installation

$ npm install -g cordova ionic
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios

## utilisation
