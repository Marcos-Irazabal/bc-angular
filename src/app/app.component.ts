import { Component, OnDestroy, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarritoComponent } from './carrito/carrito.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CarroServiceService } from './services/carro-service.service';
import { LoginServiceService } from './services/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'PracticaRecetas';

  subUsuario:Subscription
  sesionIniciada:boolean=false;
  public isCollapsed = true;
  cantItems:number=0;
  constructor(private loginService:LoginServiceService, private carroSvc:CarroServiceService){}
  

  ngOnInit(): void {
    console.log("init del appComponent"+this.loginService.token) 
    this.subUsuario=this.loginService.sujetoUsuario.subscribe(usuario => {console.log("llegaaaaaaaa "+usuario);
      this.sesionIniciada= !usuario ? false:true
  });
    
     this.loginService.autoLogin();

     this.carroSvc.cantidad$.subscribe(cant => {this.cantItems=cant;console.log("cantidad actual"+cant)});
  }

  ngOnDestroy(): void {
    this.subUsuario.unsubscribe();
  }


  
  logOut(){
    this.loginService.logout();
  }
}
