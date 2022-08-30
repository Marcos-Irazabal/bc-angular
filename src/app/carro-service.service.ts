import { Injectable } from '@angular/core';
import { ingrediente } from 'src/Ingrediente.model';
import { Receta } from './receta.model';

@Injectable({
  providedIn: 'root'
})
export class CarroServiceService {

  items: ingrediente[]

  constructor() {

    this.items= [ new ingrediente("Manzana ejemplo",1), new ingrediente("Azucar ejemplo",2) ];
   
  } 

  addItem(item:ingrediente){
    this.items.push(item);
  }

  addIngredientes(recipe:Receta){
    for (let i of recipe.getIngredientes()){
        this.items.push(i);
    }
    this.mostrarArray();
  }

  getItems(){
    return this.items;
  }

  mostrarArray(){
    console.log(this.items);
  } 



}
