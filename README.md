# kivient

Application communautaire permettant d'organiser diverses sorties entre étudiants d'une même école.


## Blocages techniques

- La géolocalisation sur les deux devices (iOS et android)

- Storage : sous android il n'y a qu'un champs qui est sauvegardé

- Installation de l'application sur device (android)

- Google analytics : l'utilisateur en temps réel ne s'affiche pas

- Splashscreen dépasse de l'écran



## Solutions techniques

- iOS : paramétrer l'emulator, aller dans Debug > location et cochez City Run

- Android : configurez un nouvel emulator dans studio android ou installer un driver et faire la démo sur un téléphone

- Storage : conflit entre le programme de debugage sous android et le device

- Installer un driver et activer le mode dev sur le device souhaité

- Redimensionner le splashscreen


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


## Avancement du projet

- J1
. Présentation coquille vide android et iOS
. Mise en place du framework Ionic
. Ajout de contact

- J2
. La géolocalisation
. L'accès remote via l'api google pour récupérer les adresses via les coordonnées GPS
. Le thème UI : icon et splashscreen de l'application
. Globalization : Traduction via un button en français ou en anglais

- J3
. Storage
. Google analytics
. Caméra
. Status bar
. Business Model Canvas
. Connexion
. Device Orientation



## Court terme

- Consulter le tableau


## Long terme

- Apprentissage Angular.js
. Lire la doc
. Faire 3 tutos
. Effectuer une action en js


## A conserver pour chaque DEMO

- Installation de plugins fonctionnels
- Environnement stable de demo
- Meilleure compréhension du brief client



## Réunion d'équipe / Emploi du temps

TOUS LES JOURS

- 8h50 : on se dit bonjour et on parle de notre vie si on a envie.
- 9h00 : on récupère les nouvelles demandes clients
- 9h15 : rédaction des users stories
- À partir de 9h30 : rendez-vous avec le client, présentations des users stories, questions/réponses et engagements sur la journée
- 12h00 : réunion : on expose tous les problèmes (on ne régle pas les problèmes mais on les annonces pour que tous le monde soit au courant) 
- 12h30-13h30 : pause déjeuner, on oublie le boulot !
- 13h30-14h00 : les binômes se répartissent les tâches et régles les problèmes évoqués lors de la réunion
- 15h00 : on commence à tester pour la démo
- À partir de 15h50 : on voit le client et on effectue la démo
- 17h00 : debrief, remarques, retrospective de la journée et de la présentation
- 18h00 : on rentre chez nous et on se repose pour être en forme demain !

