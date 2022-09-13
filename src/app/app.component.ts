import { Component, OnDestroy, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarritoComponent } from './carrito/carrito.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LoginServiceService } from './services/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  subUsuario:Subscription
  sesionIniciada:boolean=false;
  
  constructor(private loginService:LoginServiceService){}
  

  ngOnInit(): void {
    this.subUsuario=this.loginService.sujetoUsuario.subscribe(usuario =>
      this.sesionIniciada= !usuario ? false:true
      );
  }

  ngOnDestroy(): void {
    this.subUsuario.unsubscribe();
  }

  title = 'PracticaRecetas';
  
  logOut(){
    this.loginService.logout();
  }
}
