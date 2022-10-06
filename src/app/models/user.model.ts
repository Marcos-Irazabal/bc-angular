export class user{
    constructor(public email:String, public password:String,private _token:String, private _tokenExpirationDate:Date){

    }

    getToken(){
        if(this._tokenExpirationDate < new Date()){
            return null;
        }
        return this._token;
    }
}