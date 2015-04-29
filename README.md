# kivient

Application communautaire permettant d'organiser diverses sorties entre étudiants d'une même école.


## Blocages techniques

- La géolocalisation sur les deux devices (iOS et android)

- Storage : sous android il n'y a qu'un champs qui est sauvegardé

- Installation de l'application sur device (android)

- Google analytics : l'utilisateur en temps réel ne s'affiche pas

- Splashscreen dépasse de l'écran

- Photos : ne prend pas de photos

- Impossible de détecter le Beacon

- Social Sharing : Le partage twitter ne se lance pas sur les devices Android



## Solutions techniques

- iOS : paramétrer l'emulator, aller dans Debug > location et cochez City Run

- Android : configurez un nouvel emulator dans studio android ou installer un driver et faire la démo sur un téléphone

- Storage : conflit entre le programme de debugage sous android et le device

- Installer un driver et activer le mode dev sur le device souhaité

- Redimensionner le splashscreen

- Ne pas aller chercher dans la gallery photo

- Appeler la librairie Cordova

- Intstaller l'application Twitter (sur android)


## Problèmes

- Mauvaise compréhension du Business Model Canvas (notamment pour les ressources)

- Mauvaise estimation de certaines tâches

- La recherche d'utilisation "Device Orientation" et rédaction de la user story

- Déterminer Killeur Feature


## Solutions

- Les ressources sont les compétences, les outils et les personnes requises pour mener à bien le projet

- Prendre plus de temps pour estimer chaque tâche et dans le doute vérifier techniquement avant d'estimer

- Nous allons afficher un message lorsque l'utilisateur tourne son écran pour lui indiquer qu'il aura une meilleure visibilité à la verticale

- Déclencher le vibreur à une certaine distance


## Business Model Canvas

![Screenshot des détails](https://scontent-lhr.xx.fbcdn.net/hphotos-xta1/t31.0-8/11148821_10153252133742296_6535450491144904868_o.jpg)


## Installation

- $ npm install -g cordova ionic
- $ ionic platform add ios
- $ ionic build ios
- Installer tous les plugins présents dans le package.json
- $ ionic emulate [ios, android]


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




