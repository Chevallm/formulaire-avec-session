# EXERCICE À RENDRE : IMPLÉMENTER UN FORMULAIRE EN PLUSIEURS ÉTAPES AVEC SESSION

## Objectif
Réaliser une application qui permet à un utilisateur de s'inscrire en donnant des informations personnelles.
La saisie d'information doit se faire en plusieurs étapes :

Une première page Web demande à l'utilisateur de saisir son nom et son prénom. Puis l'utilisateur clique sur le bouton "suivant".
Une nouvelle page demande à l'utilisateur de saisir son adresse dans un seul champ texte. Puis l'utilisateur clique sur le bouton "valider".
Finalement une page récapitulative s'affiche avec toutes les informations de l'utilisateur (nom, prénom et adresse).
Pour réaliser cette inscription en plusieurs étapes, vous utiliserez le mécanisme de session Web pour conserver temporairement les données saisies par l'utilisateur.

## Modèle Maven du projet à télécharger
webapp-template.zip

## Mise en place du projet
Éditer le fichier pom.xml du template et modifier la balise artifactId pour spécifier le nom de votre projet. Modifier ensuite la section <developers> pour indiquer vos nom et email.

## Intégration du projet dans Eclipse
L'intégration du projet dans Eclipse suit la même procédure que celle vue lors de l'introduction à Maven