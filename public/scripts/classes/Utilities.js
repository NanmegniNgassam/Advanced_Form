"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
let localDataKey = 'accounts';
class Account {
    constructor(userName, userEmail, birthdate, password) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.birthdate = birthdate;
        this.password = password;
    }
    format() {
        return ('');
    }
}
exports.Account = Account;
