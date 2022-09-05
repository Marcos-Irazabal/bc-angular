import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ingrediente } from 'src/Ingrediente.model';
import { CarroServiceService } from '../carro-service.service';
import { RecetaServiceService } from '../receta-service.service';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

  constructor(private miServicio:RecetaServiceService, private router:Router) { 
  }

public addToCart(recipe: Receta){
  this.miServicio.addToCarrito(recipe);
}

public getServiceReceta(){
  return this.miServicio.getItems();
 }
 /*
public showDetails(indice:number){
  this.router.navigate(["recetas/detalles"],{queryParams: {id:Number} })
}*/

 /*
 input_name:String;
 input_url:"https://elfogongaucho.com.ar/fogon/wp-content/uploads/2021/08/mila-con-frita.jpg";
 input_descripcion:String;

 public agregarReceta(){
    this.miServicio.addItem(new Receta(this.input_name,this.input_url,this.input_descripcion,this.ingredientesManzana));
 }
*/

}
