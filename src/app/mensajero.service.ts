import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ingrediente } from 'src/Ingrediente.model';
import { Receta } from './receta.model';
@Injectable({
  providedIn: 'root'
})
export class MensajeroService {

  //private mensajeSource = new BehaviorSubject<Receta>(new Receta("placeholder","placeholder","placeholder",[(new ingrediente("placeholder",1))]));
  private mensajeSource = new BehaviorSubject<String>("sarasa");
  mensajeActual= this.mensajeSource.asObservable();

  constructor() { }

  /*cambioMensaje(mensaje: Receta){
    this.mensajeSource.next(mensaje);
  }*/

  cambioMensaje(mensaje: String){
    this.mensajeSource.next(mensaje);
  }
}
