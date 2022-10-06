import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrdenCompra } from '../models/OrdenCompra';
import { DataService } from './data.service';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService{

  ordenesTotales:Array<OrdenCompra>
  ordenesActuales:Array<OrdenCompra>
  
  constructor(private http:DataService,private loginService:LoginServiceService) { 
    /*this.ordenesTotales=[];
    this.http.descargarOrdenesCompra().subscribe(act => {
      this.ordenesTotales=Object.values(act);
    })
    this.getOrdenesDelUsuario(); */
  }
  setOrdenesTotales(ord:Array<OrdenCompra>){
    this.ordenesTotales=ord;
  }

  setOrdenesActuales(ord:Array<OrdenCompra>){
    this.ordenesActuales=ord;
  }

  getOrdenesDelUsuario(){
    this.ordenesActuales=this.ordenesTotales.filter((obj)=>{return obj.usuario==this.loginService.getUsuario()})
    return this.ordenesActuales;
  }

  eliminarOrden(eliminando:OrdenCompra){
    let indice_a_eliminar =this.ordenesTotales.indexOf(eliminando);
    if (indice_a_eliminar !== -1) {
      this.ordenesTotales.splice(indice_a_eliminar, 1);
    }
    this.http.subirOrdenCompra(this.ordenesTotales);
  }
}
