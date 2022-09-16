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
  ordenesDeUsuario$:BehaviorSubject<Array<OrdenCompra>>;
  
  constructor(private http:DataService,private loginService:LoginServiceService) { 
    this.ordenesTotales=[];
    this.http.descargarOrdenesCompra().subscribe(act => {
      this.ordenesTotales=Object.values(act);
    })

    this.ordenesDeUsuario$=new BehaviorSubject(this.getOrdenesDelUsuario());
    this.ordenesDeUsuario$.next(this.ordenesTotales);
  }

  getOrdenesDeUsuario$():Observable<Array<OrdenCompra>>{
    return this.ordenesDeUsuario$.asObservable();
  }

  getOrdenesDelUsuario(){
    return this.ordenesTotales.filter((obj)=>{return obj.usuario==this.loginService.getUsuario()})
  }

  eliminarOrden(eliminando:OrdenCompra){
    let indice_a_eliminar =this.ordenesTotales.indexOf(eliminando);
    if (indice_a_eliminar !== -1) {
      this.ordenesTotales.splice(indice_a_eliminar, 1);
    }
    this.http.subirOrdenCompra(this.ordenesTotales);

    this.ordenesDeUsuario$.next(this.ordenesTotales);
  }
}
