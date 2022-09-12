import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;
  isLoginMode: boolean=true;

  constructor(private auth:LoginServiceService,private fb:FormBuilder) {
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


   // let email=this.formulario.value.email;
   // let contraseña=this.formulario.value.contra;
   // this.auth.login(email,contraseña).subscribe(respuesta => console.log(respuesta));
    autenticadorObserbable.subscribe(respuesta => console.log(respuesta));
  }


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
}
}
