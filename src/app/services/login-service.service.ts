import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

export interface AuthResponseData{
  idToken:string;
  email:string;
  refreshToken:string
  expiresIn:string
  localId:string
  registered:boolean
}

interface peticion{
  email:String;
  password:String;
  returnSecureToken:boolean;
}


@Injectable({
  providedIn: 'root'
})


export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(correo:String,pass:String){
    let aux:peticion= {email:correo,password:pass,returnSecureToken:true}
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxvVXcuYFNesAYKT6US7vt9Nb-Mp9rXF4",aux);
  }

  signUp(correo:String,pass:String){
    let aux:peticion= {email:correo,password:pass,returnSecureToken:true}
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxvVXcuYFNesAYKT6US7vt9Nb-Mp9rXF4",aux);
  }
}
