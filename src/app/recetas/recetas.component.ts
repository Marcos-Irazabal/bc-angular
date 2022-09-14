import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecetaServiceService } from "src/app/services/receta-service.service";
import { ingrediente } from '../models/Ingrediente.model';
import { Receta } from '../models/receta.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit{

  recipes:Array<Receta>;

  constructor(private miServicio:RecetaServiceService, private servicioHttp:DataService) { 
  }
  ngOnInit(): void {
    this.servicioHttp.descargarRecetas().subscribe(recetasBD => {
      this.recipes=Object.values(recetasBD);
      this.miServicio.addItems(this.recipes);
    })
  }

  getNombre(indice:number){
    return this.recipes[indice].getNombre();
   }
  

public addToCart(recipe: Receta){
  this.miServicio.addToCarrito(recipe);
}

public getServiceReceta(){
  this.recipes= this.miServicio.getItems();
  return this.recipes;
  //return this.miServicio.getItems();
 }

 uploadRecipes(){
  this.servicioHttp.subirRecetas(this.miServicio.getItems());
  /* si quiero agregar una mas a la BD
  let recetitas:Array<Receta> = this.miServicio.getItems();
  let auxiliar:ingrediente[]=[(new ingrediente("fideos ejemplo",2)) , (new ingrediente(" tuco",1)) ];
  let receta1: Receta = new Receta("fideos con tuco","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSrxfwGsZL71RqZIFlcjipXjw-sndtwjqYg&usqp=CAU","como los que hacia tu mama",auxiliar);
  recetitas.push(receta1);
  this.servicioHttp.subirRecetas(recetitas);
  */
}

 downloadRecipes(){
  this.servicioHttp.descargarRecetas().subscribe(act => {
    this.miServicio.recipes=Object.values(act);
  })
 }

 
}
