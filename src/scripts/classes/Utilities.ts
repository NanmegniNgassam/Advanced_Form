import { User } from "./Account";
// Gestion de la zone de sauvegarde
let localDataKey = 'accounts'

let createAccount = (userEmail:string, userName:string, birthday:Date, password:string) => {
    let db = localStorage.getItem(localDataKey);
    let data = {
        
    }

    if(db == null) {
        localStorage.setItem(localDataKey, '');
    } else {
        console.log('db already exists !');
    }
}

