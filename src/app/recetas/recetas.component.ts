import { Component, Input, OnInit } from '@angular/core';
import { RecetaServiceService } from "src/app/services/receta-service.service";
import { Receta } from '../models/receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

  constructor(private miServicio:RecetaServiceService) { 
  }

public addToCart(recipe: Receta){
  this.miServicio.addToCarrito(recipe);
}

public getServiceReceta(){
  return this.miServicio.getItems();
 }
}
