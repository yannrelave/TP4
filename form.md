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

**2. Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.**

**3. Que contient la variable `event` dans `onChange={(event) => setName(event.target.value)}`? Vous pouvez la scruter à l'aide de `console.log`.**

**4. Pourquoi doit-on encapsuler un espace avec `{" "}` ?**

**5. Peut-on transmettre une fonction dans un Props ?**

**6. Précisez étape par étape ce que fait React lorsque le champ nom est modifié.**

**7. Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.**

**8. Un composant a été designé avec `styled-components`. En s'aidant de la [documentation de cette librairie](https://styled-components.com/docs/basics#getting-started), expliquez en quoi consiste ce design.**

## Mini-projet : un timer

Programmez un composant qui s'incrémente à chaque seconde. Vous aurez pour cela besoin d'utiliser la fonction [`setInterval`](https://www.w3schools.com/jsref/met_win_setinterval.asp). 

Créez un bouton pour démarrer et arrêter le timer. Séparez les secondes des minutes. Réinitialisez le compteur lorsqu'il atteint la valeur `99:59`. Ajoutez une image de fond pour que cela ressemble à un réveil. Utilisez la librairie [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display) pour rendre votre réveil plus réaliste. 

Rédigez un test pour vérifier que le timer fonctionne bien. Vous aurez pour cela besoin de mocker la fonction `setInterval` avec [Jest](https://jestjs.io/docs/en/timer-mocks).

Désignez au moins 1 composant avec `styled-components`.
