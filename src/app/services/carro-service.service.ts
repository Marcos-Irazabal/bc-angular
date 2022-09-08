import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ingrediente } from 'src/app/models/Ingrediente.model';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class CarroServiceService {

  items: ingrediente[]
  sujeto$: Subject<boolean>;
  

  constructor() {
   // this.items= [ new ingrediente("Manzana ejemplo",1), new ingrediente("Azucar ejemplo",2) ];
   this.items=[];
  } 

  pushItem(item:ingrediente){
    this.items.push(item);
  }
  
  getItems(){
    return this.items;
  }
  getItemCant(n:number){
    return this.items[n].getCantidad();
  }

  agregarCant(incremento:number,nombre:String){
    let posicion:number=-1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getNombre()==nombre){
        posicion=i;
      }
    }
    this.items[posicion].setCantidad(this.items[posicion].getCantidad() + incremento);
  }

  contains(nombre:String):number{
    let posicion:number=-1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getNombre()==nombre){
        posicion=i;
      }
    }
    return posicion;
  }

  agregarItem(text:String,cant:number){
    let aux:number =this.contains(text);//devuelve la posicion del item
    if (aux!=-1){//si esta en el vector
      this.agregarCant(cant,text);
    }else{//si no esta en el vector
      let item = new ingrediente(text,cant)
      this.pushItem(item);
    }   
  }

  addIngredientesDeReceta(recipe:Receta){
    for (let i of recipe.ingredientes){
        this.agregarItem(i.nombre,i.cantidad);
    }
  } 

  deleteItems(){
    this.items=[];
    this.sujeto$.next(false);
  }

  getSujeto$():Observable<boolean>{
    return this.sujeto$.asObservable();
  }



}
