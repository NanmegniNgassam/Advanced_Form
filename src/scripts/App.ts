// Gestion de la zone mémoire
let localDataKey = 'accounts'

let createAccount = (userEmail:string, userName:string, userBirthday:Date, userPassword:string) => {
    let db = localStorage.getItem(localDataKey);
    let data = {
        name : userName,
        email : userEmail,
        birth : userBirthday,
        password : userPassword
    }

    let accounts = Array();
    let req :string;

    if(db == null) { // users accounts db is empty
        // Ajout de deux comptes fictifs
        accounts.push({
            name : 'Gilles',
            email : 'gilles@gmail.com',
            birth : '2004-01-07T00:00:00.000Z',
            password : 'killer'
        });
        accounts.push({
            name : 'Root',
            email : 'root@gmail.com',
            birth : '2002-01-01T00:00:00.000Z',
            password : 'killer'
        });

        //vérifier si les clés de connexions passées n'existent pas déjà

        accounts.push(data);
        req = JSON.stringify(accounts);
        localStorage.setItem(localDataKey, req);
    } else { //user accounts db already exists
        accounts = JSON.parse(db);
        accounts.push(data);
        req = JSON.stringify(accounts);
        localStorage.setItem(localDataKey,req);
    }
}

let tryConnection = (email:string, password:string) :(Object|null) => {
    let accounts = Array();
    let account;
    let req;

    req = localStorage.getItem(localDataKey);
    
    if(req == null) {
        return null;
    } else {
        accounts = JSON.parse(req);

        return {};
    }
}


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
    e.preventDefault();
    let tryConnectStatus: boolean = false;

    tryConnectStatus = (emailLogin.value.length > 0) &&
                       (passwordLogin.value.length > 0)
    ;

    if(tryConnectStatus) {
        let result = tryConnection(emailLogin.value, passwordLogin.value);

        // Définition d'une session storage pour la session active

        //redirection

    } else {
        loginMessage.textContent = "something's wrong with your datas";
    }
    //vérification de la cohérence des données avec la base des utilisateurs

    // Rédirections vers la page utilisateur
})

//Traitement du formulaire d'inscription
signinForm1.addEventListener('submit', (e) => {
    e.preventDefault();
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
        signinMessage.classList.add('access-granted');
        signinMessage.classList.remove('access-denied');
        signinMessage.textContent = "Account creation was succesful";
        //Création du coockie contenant les informations du compte utilisateur
        //redirection vers la page utilisateur
        createAccount(emailSignin.value, userNameSignin.value, birthEntry, userPasswordSignin.value);
    } else {
        signinMessage.classList.remove('access-granted');
        signinMessage.classList.add('access-denied');
        signinMessage.textContent = "Something's wrong with your datas";
    }
    
})