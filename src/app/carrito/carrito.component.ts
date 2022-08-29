import { Component, OnInit } from '@angular/core';
import { ingrediente } from 'src/Ingrediente.model';
import { MensajeroService } from '../mensajero.service';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private servicioMensaje:MensajeroService) { 
    this.items= [ new ingrediente("Manzana ejemplo",1), new ingrediente("Azucar ejemplo",2) ];
  }

  ngOnInit(): void {
    this.servicioMensaje.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
  }

  ngDoCheck(){
    this.mensajeString=this.mensaje;
  }

  addIngredientes(recipe:Receta){
    for (let i of recipe.getIngredientes()){
        this.items.push(i);
    }
}
 //mensaje:Receta;
 mensaje:String;
 mensajeString:String;

 items: ingrediente[]
 input_cant:number;
 input_name:String;

 public agregarItem(){
    let item = new ingrediente(this.input_name,this.input_cant)
    this.items.push(item);
 }




}
