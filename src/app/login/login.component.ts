import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  formulario:FormGroup;
  isLoginMode: boolean=true;
  error: String;

  constructor(private auth:LoginServiceService,private fb:FormBuilder,private router:Router) {
    this.formulario=this.fb.group({
      email:["",[Validators.required]],
      contra:["",[Validators.required,Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
  }

  formAction(){
    let email=this.formulario.value.email;
    let contraseña=this.formulario.value.contra;
    let autenticadorObserbable = new Observable<AuthResponseData>;

    autenticadorObserbable = this.isLoginMode ? this.auth.login(email, contraseña) : this.auth.signUp(email, contraseña);

    autenticadorObserbable.subscribe(
      respuesta => {
        console.log(respuesta);
        this.router.navigate(["recetas"]);
      }, mensajeError => {
          console.log(mensajeError);
          this.error = mensajeError;
        }
    )}


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
}


}


