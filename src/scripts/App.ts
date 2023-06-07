/*Form Handling*/
let loginForm1 = document.getElementById('loginForm') as HTMLFormElement;
let signinForm1 = document.getElementById('signinForm') as HTMLFormElement;

/*Inputs management*/
let emailSignin = document.getElementById('email-signin') as HTMLInputElement;
let userNameSignin = document.getElementById('username-signin') as HTMLInputElement;
let userBirthdateSignin = document.getElementById('userbirthday-signin') as HTMLInputElement;
let userPasswordSignin = document.getElementById('password-signin') as HTMLInputElement;
let signinMessage = document.getElementById('signin-message') as HTMLSpanElement;

let emailLogin = document.getElementById('email-login') as HTMLInputElement;
let passwordLogin = document.getElementById('password-login') as HTMLInputElement;
let loginMessage = document.getElementById('login-message') as HTMLSpanElement;


// Traitement du formulaire de connexion
loginForm1.addEventListener('submit', (e) => {
    let tryConnectStatus: boolean = false;

    tryConnectStatus = (emailLogin.value.length > 0) &&
                       (passwordLogin.value.length > 0)
    ;

    if(tryConnectStatus) {
        console.log("Lancement de la procédure de verification de la base de données");
    } else {
        loginMessage.textContent = "something's wrong with your datas";
    }
    //vérification de la cohérence des données avec la base des utilisateurs

    // Rédirections vers la page utilisateur
    e.preventDefault();
})

//Traitement du formulaire d'inscription
signinForm1.addEventListener('submit', (e) => {
    let validationStatus:boolean = false
    let currentDate = new Date();

    validationStatus = (emailSignin.value.length > 0) &&
                       (userNameSignin.value.length > 0) && 
                       (userBirthdateSignin.value.length > 0) && 
                       (userPasswordSignin.value.length > 0)
    ;

    let birthdate = userBirthdateSignin.value.split('-');
    let birthEntry = new Date(
        Date.UTC(
            Number(birthdate[0]),
            Number(birthdate[1]) -1,
            Number(birthdate[2]),
            0,
            0,
            0
        )
    )

    // Verification of birthdate validity
    validationStatus = ((currentDate.valueOf() > birthEntry.valueOf()));

    if(validationStatus) {
        console.log('les informations que vous avez entrés sont correctes');
        //Création du coockie contenant les informations du compte utilisateur
        //redirection vers la page utilisateur
    } else {
        signinMessage.classList.remove('access-granted');
        signinMessage.classList.add('access-denied');
        signinMessage.textContent = "Something's wrong with your datas";
    }
    e.preventDefault();
})