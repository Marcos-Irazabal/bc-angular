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
  private tokenExpirationTimer: any;
  sujetoUsuario= new Subject<user>();
  token:String=null;

  logged:boolean=false;

  constructor(private http:HttpClient, private router:Router) { this.logged=false;}

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


  handleAuth(email:String, userId:String, tokencito:String, expiracion:String){
    console.log("handla AUTH "+tokencito);
    const expirationDate= new Date(new Date().getTime() + +expiracion * 1000);
      let usuario= new user(
        email,
        userId,
        tokencito,
        expirationDate);
      this.sujetoUsuario.next(usuario);
      this.token=tokencito;
    localStorage.setItem("DatosDelUsuario",JSON.stringify(usuario));
    this.logged=true;
  }

  logout() {
    this.sujetoUsuario.next(null);
    localStorage.removeItem('DatosDelUsuario');
    this.logged=false;
    this.router.navigate(['/login']);
    if (this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
}

autoLogin(){
  let datosUsu: {email:String,password:String,_token:String,_tokenExpirationDate:string} = JSON.parse(localStorage.getItem("DatosDelUsuario"));
  if (!datosUsu){
    console.log("no hay usuario");
    return 
  }
  let usuarioCargado = new user(datosUsu.email,datosUsu.password,datosUsu._token,new Date(datosUsu._tokenExpirationDate));
  if (usuarioCargado.getToken()) {
    this.sujetoUsuario.next(usuarioCargado);
    this.logged=true;

    this.token=usuarioCargado.getToken();//con esto no me rompe mas las peticiones pero ahora me cierra la sesion

    const expirationDuration = new Date(datosUsu._tokenExpirationDate).getTime() - new Date().getTime();
    this.autoLogout(expirationDuration); 
};
}

autoLogout(expirationDuration: number) {
  this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
  }, expirationDuration)
}

}
