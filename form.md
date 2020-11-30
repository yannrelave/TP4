# Les formulaires avec React

Ce TP permet de créer un formulaire avec React. Nous allons voir comment récupérer des informations pour inscrire un utilisateur dans notre application.
En pratique, des librairies comme [Formik](https://formik.org/) proposent une API simple pour cela. 

## Analyse du code

Lisez [le code lié à ce TP](https://codesandbox.io/s/tp-react-form-itrhu?file=/src/index.js) puis répondez aux questions.

**1. Décrire le rôle de chaque fonction (une phrase par fonction).**  

- `validateEmail(value)` permet de vérifier que le text saisie correspond à une adresse mail, via le RegEx, et que le champs est saisie.
- `validateName(name)` permet de vérifier qu'un nom a été saisie dans le champs.
- `NameField({ name, setName })` permet d'afficher le message "Un nom est obligatoire" si le champs est vide via une condition ternaire, en appellant la fonction `validateName(name)`.  
- `EmailField({ email, setEmail })` tout comme la fonction précédente, elle permet d'afficher le message "Une adresse email est obligatoire" si l'adresse mail ne respecte pas le RegEx de la fonction `validateEmail(value)`.  
- `Inscription()` affiche le formulaire en vérifiant que le nom et l'adresse sont valides, si oui, au clic du bouton la fonction `submit()` est appelée et le compte est crée.

**2. Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.**  

- States : `name`, `email` et `isSubmit`. La valeur du nom et de l'adresse sont par défaut une chaine vide et celle envoyée par le bouton est initialisée à false.  
- Props : name, setName, email, setEmail, onClick, disabled. La valeur par défaut de `name` est le state `name`, la valeur par défaut de `setName` est le state `setName`, la valeur par défaut de `email` est le state `email`, la valeur par défaut de `setEmail` est le state `setEmail`, la valeur par défaut de `onClick` est une fonction fléchée, la valeur par défaut de `disabled` est la constante `canSubmit`.

**3. Que contient la variable `event` dans `onChange={(event) => setName(event.target.value)}`? Vous pouvez la scruter à l'aide de `console.log`.**  

La variable `event` contient la valeur du champs "Nom", récupérée grâce au `event.target.value`.

**4. Pourquoi doit-on encapsuler un espace avec `{" "}` ?**  

L'espace permet d'espacer le input et le texte. Sans les `{}`, les `""` apparaitraient sur la page avant le message, car il n'y a pas le passage en JavaScript. 

**5. Peut-on transmettre une fonction dans un Props ?**  

Non, on ne peut transmettre une focntion dans un Props, car celui-ci comporte seulement des valeurs.

**6. Précisez étape par étape ce que fait React lorsque le champ nom est modifié.**  

- 1 :  Appel de la fonction `NameField({ name, setName })`.
- 2 :  Vérification que le champs n'est pas vide.
- 3 :  Initialisation du formulaire et affichage du nom.
- 4 :  Changement du nom dans son champs "nom".
- 5 :  Appel de la fonction `setName()` et envoie de la valeur entrée avec la commande `event.target.value`.
- 6 :  Modification de la valeur de la variable "name".
- 7 : Affichage de la nouvelle valeur en direct.

**7. Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.**  

La regex pour valider un email vérifie que la saisie comporte des caractères minuscules, majuscules, spéciaux et meme des chiffres, suivis par un "@" et finissant par des des caractères minuscules ou majuscules ou des chiffres.

**8. Un composant a été designé avec `styled-components`. En s'aidant de la [documentation de cette librairie](https://styled-components.com/docs/basics#getting-started), expliquez en quoi consiste ce design.**  

Ce design consiste à utiliser plus simplement du style css en React. Ici il permet de mettre en forme le champs Input.

## Mini-projet : un timer

Programmez un composant qui s'incrémente à chaque seconde. Vous aurez pour cela besoin d'utiliser la fonction [`setInterval`](https://www.w3schools.com/jsref/met_win_setinterval.asp). 

Créez un bouton pour démarrer et arrêter le timer. Séparez les secondes des minutes. Réinitialisez le compteur lorsqu'il atteint la valeur `99:59`. Ajoutez une image de fond pour que cela ressemble à un réveil. Utilisez la librairie [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display) pour rendre votre réveil plus réaliste. 

Rédigez un test pour vérifier que le timer fonctionne bien. Vous aurez pour cela besoin de mocker la fonction `setInterval` avec [Jest](https://jestjs.io/docs/en/timer-mocks).

Désignez au moins 1 composant avec `styled-components`.
