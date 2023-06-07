"use strict";
// Gestion de la zone mémoire
let localDataKey = 'accounts';
let createAccount = (userEmail, userName, userBirthday, userPassword) => {
    let db = localStorage.getItem(localDataKey);
    let data = {
        name: userName,
        email: userEmail,
        birth: userBirthday,
        password: userPassword
    };
    let accounts = Array();
    let req;
    if (db == null) {
        accounts.push(data);
        req = JSON.stringify(accounts);
        localStorage.setItem(localDataKey, req);
    }
    else {
        accounts = JSON.parse(db);
        accounts.push(data);
        console.log(accounts);
        req = JSON.stringify(accounts);
        localStorage.setItem(localDataKey, req);
    }
};
/*Form Handling*/
let loginForm1 = document.getElementById('loginForm');
let signinForm1 = document.getElementById('signinForm');
/*Inputs management*/
let emailSignin = document.getElementById('email-signin');
let userNameSignin = document.getElementById('username-signin');
let userBirthdateSignin = document.getElementById('userbirthday-signin');
let userPasswordSignin = document.getElementById('password-signin');
let signinMessage = document.getElementById('signin-message');
let emailLogin = document.getElementById('email-login');
let passwordLogin = document.getElementById('password-login');
let loginMessage = document.getElementById('login-message');
// Traitement du formulaire de connexion
loginForm1.addEventListener('submit', (e) => {
    e.preventDefault();
    let tryConnectStatus = false;
    tryConnectStatus = (emailLogin.value.length > 0) &&
        (passwordLogin.value.length > 0);
    if (tryConnectStatus) {
        console.log("Lancement de la procédure de verification de la base de données");
    }
    else {
        loginMessage.textContent = "something's wrong with your datas";
    }
    //vérification de la cohérence des données avec la base des utilisateurs
    // Rédirections vers la page utilisateur
});
//Traitement du formulaire d'inscription
signinForm1.addEventListener('submit', (e) => {
    e.preventDefault();
    let validationStatus = false;
    let currentDate = new Date();
    validationStatus = (emailSignin.value.length > 0) &&
        (userNameSignin.value.length > 0) &&
        (userBirthdateSignin.value.length > 0) &&
        (userPasswordSignin.value.length > 0);
    let birthdate = userBirthdateSignin.value.split('-');
    let birthEntry = new Date(Date.UTC(Number(birthdate[0]), Number(birthdate[1]) - 1, Number(birthdate[2]), 0, 0, 0));
    // Verification of birthdate validity
    validationStatus = ((currentDate.valueOf() > birthEntry.valueOf()));
    if (validationStatus) {
        signinMessage.classList.add('access-granted');
        signinMessage.classList.remove('access-denied');
        signinMessage.textContent = "Account creation was succesful";
        //Création du coockie contenant les informations du compte utilisateur
        //redirection vers la page utilisateur
        createAccount(emailSignin.value, userNameSignin.value, birthEntry, userPasswordSignin.value);
    }
    else {
        signinMessage.classList.remove('access-granted');
        signinMessage.classList.add('access-denied');
        signinMessage.textContent = "Something's wrong with your datas";
    }
});
