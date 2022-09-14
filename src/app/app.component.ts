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
  public isCollapsed = true;
  constructor(private loginService:LoginServiceService){}
  

  ngOnInit(): void {
    console.log("init del appComponent"+this.loginService.token) 
    this.subUsuario=this.loginService.sujetoUsuario.subscribe(usuario => {console.log("llegaaaaaaaa "+usuario);
      this.sesionIniciada= !usuario ? false:true
  });
    
     this.loginService.autoLogin();
  }

  ngOnDestroy(): void {
    this.subUsuario.unsubscribe();
  }

  title = 'PracticaRecetas';
  
  logOut(){
    this.loginService.logout();
  }
}
