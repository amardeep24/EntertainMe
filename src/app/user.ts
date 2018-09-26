export class User{
    private _username: string;
    private _password: string;

    get password():string{
        return atob(this._password)
    }

    get username():string{
        return this._username;
    }
    set password(password: string){
        this._password = btoa(password);
    }
    set username(usename: string){
        this._username = usename;
    }

}