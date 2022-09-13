import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, Subject, throwError, tap } from 'rxjs';
import { user } from '../models/user.model';

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

  sujetoUsuario= new Subject<user>();
  token:String=null;

  constructor(private http:HttpClient, private router:Router) { }

  login(correo:String,pass:String){
    let aux:peticion= {email:correo,password:pass,returnSecureToken:true}
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxvVXcuYFNesAYKT6US7vt9Nb-Mp9rXF4",aux)
    .pipe(catchError(errorRes =>{
      let mensajeError = "ocurrio un error desconocido";
      switch(errorRes.error.error.message){
        case "EMAIL_NOT_FOUND": mensajeError="Ese email no se encuentra registrado";
        case "INVALID_PASSWORD": mensajeError="Credenciales invalidas";
      }
      return throwError(mensajeError);
    }),tap(resData => { this.handleAuth(resData.email,resData.localId,resData.idToken,resData.expiresIn);}) )
  }
  

  signUp(correo:String,pass:String){
    let aux:peticion= {email:correo,password:pass,returnSecureToken:true}
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxvVXcuYFNesAYKT6US7vt9Nb-Mp9rXF4",aux)
    .pipe(catchError(errorRes =>{
      let mensajeError = "ocurrio un error desconocido";
      switch(errorRes.error.error.message){
        case "EMAIL_EXISTS": mensajeError="ese email ya se encuentra registrado";
      }
      return throwError(mensajeError);
    }),tap(resData => { this.handleAuth(resData.email,resData.localId,resData.idToken,resData.expiresIn)}) );
  }


  handleAuth(email:String, userId:String, token:String, expiracion:String){
    const expirationDate= new Date(new Date().getTime() + +expiracion * 1000);
      let usuario= new user(
        email,
        userId,
        token,
        expirationDate);
      this.sujetoUsuario.next(usuario);
      this.token=token;
  }

  logout() {
    this.sujetoUsuario.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
}

}
