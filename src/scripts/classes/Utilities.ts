let localDataKey = 'accounts'

export class Account {
    constructor(
        private userName : string,
        private userEmail : string,
        private birthdate : Date,
        private password  : string
    ) {}

    public format():string {
        return ('');
    }
}