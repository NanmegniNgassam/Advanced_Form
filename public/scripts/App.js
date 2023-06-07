"use strict";
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
    console.log('Validation du formulaire');
    // Vérification des champs, mise à jour du localstorage et traitement final
    //window.location.href = 'public/pages/user.html'
    e.preventDefault();
});
//Traitement du formulaire d'inscription
signinForm1.addEventListener('submit', (e) => {
    let validationStatus = false;
    let currentDate = new Date();
    validationStatus = (emailSignin.value.length > 0);
    validationStatus = (userNameSignin.value.length > 0);
    validationStatus = (userBirthdateSignin.value.length > 0);
    validationStatus = (userPasswordSignin.value.length > 0);
    let birthdate = userBirthdateSignin.value.split('-');
    let birthEntry = new Date(Date.UTC(Number(birthdate[0]), Number(birthdate[1]) - 1, Number(birthdate[2]), 0, 0, 0));
    // Verification of birthdate validity
    validationStatus = ((currentDate.valueOf() > birthEntry.valueOf()));
    if (validationStatus) {
        console.log('les informations que vous avez entrés sont correctes');
        //Création du coockie contenant les informations du compte utilisateur
        //redirection vers la page utilisateur
    }
    else {
        signinMessage.classList.remove('access-granted');
        signinMessage.classList.add('access-denied');
        signinMessage.textContent = "Something's wrong with your datas";
    }
    e.preventDefault();
});
