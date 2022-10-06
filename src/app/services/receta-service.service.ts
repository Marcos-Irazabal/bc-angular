import { Injectable } from '@angular/core';
import { ingrediente } from 'src/app/models/Ingrediente.model';
import { CarroServiceService } from './carro-service.service';
import { Receta } from 'src/app/models/receta.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class RecetaServiceService {
 /*
  auxiliar:ingrediente[]=[(new ingrediente("Manzana ejemplo",1)) , (new ingrediente("Azucar ejemplo",2)) ];
 auxiliar2:ingrediente[]=[(new ingrediente("Ternera",1)) , (new ingrediente("Queso",1)) , (new ingrediente("salsa",1)) , (new ingrediente("pan rallado",1)) ];
 receta1: Receta = new Receta("Manzana acaramelada","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSrxfwGsZL71RqZIFlcjipXjw-sndtwjqYg&usqp=CAU","tiene mucho azucar",this.auxiliar);
 receta2:Receta = new Receta("Milanesa napolitana","https://www.paulinacocina.net/wp-content/uploads/2015/03/P1150541-e1439164269502.jpg", "con salsa", this.auxiliar2) ;
 */
 recipes:Receta[] //= [this.receta1,this.receta2];
 
 constructor(private servicioCarro:CarroServiceService) { 
  }

  addItem(item:Receta){
    this.recipes.push(item);
  }

  addItems(items:Receta[]){
    this.recipes=items;
  }

  addToCarrito(recipe:Receta){
    this.servicioCarro.addIngredientesDeReceta(recipe);
  }

  getItems(){
    return this.recipes;
  }

  getItem(i:number){
    return this.recipes[i];
  }
}
