import { Injectable } from '@angular/core';
import { ingrediente } from 'src/Ingrediente.model';
import { CarroServiceService } from './carro-service.service';
import { Receta } from './receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaServiceService {
 auxiliar:ingrediente[]=[(new ingrediente("Manzana ejemplo",1)) , (new ingrediente("Azucar ejemplo",2)) ];
 recipes:Receta[] = [ new Receta("Manzana acaramelada","https://elfogongaucho.com.ar/fogon/wp-content/uploads/2021/08/mila-con-frita.jpg", "tiene mucho azucar", this.auxiliar)];
  constructor(private servicioCarro:CarroServiceService) { }

  addItem(item:Receta){
    this.recipes.push(item);
  }

  addToCarrito(recipe:Receta){
    this.servicioCarro.addIngredientes(recipe);
  }

  getItems(){
    return this.recipes;
  }
}
