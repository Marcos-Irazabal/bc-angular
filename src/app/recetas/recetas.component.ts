import { Component, OnInit } from '@angular/core';
import { ingrediente } from 'src/Ingrediente.model';
import { MensajeroService } from '../mensajero.service';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  constructor(private servicioMensaje:MensajeroService) { 
    this.recetas= [ new Receta("Manzana acaramelada","https://elfogongaucho.com.ar/fogon/wp-content/uploads/2021/08/mila-con-frita.jpg", "tiene mucho azucar", this.auxiliar)];
  }

  ngOnInit(): void {
    this.servicioMensaje.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
    //this.mensajeString = this.mensaje.getNombre();
    this.mensajeString = this.mensaje;
  }
  //mensaje:Receta;
  mensaje:String;
  mensajeString:String;


 auxiliar:ingrediente[]=[(new ingrediente("Manzana ejemplo",1)) , (new ingrediente("Azucar ejemplo",2)) ];
 recetas: Receta[]
 input_name:String;
 input_url:"https://elfogongaucho.com.ar/fogon/wp-content/uploads/2021/08/mila-con-frita.jpg";
 input_descripcion:String;


 public agregarReceta(){
    let item = new Receta(this.input_name,this.input_url,this.input_descripcion,this.auxiliar)
    this.recetas.push(item);
 }

 /*public addToCart(recipe:Receta){  
  this.mensaje=recipe;
 } */

 public addToCart(recipe:String){  
  this.mensaje=recipe;
 } 
}
