import { Component, OnInit } from '@angular/core';
import { ingrediente } from 'src/Ingrediente.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { 
    this.items= [ new ingrediente("Manzana ejemplo",2), new ingrediente("Azucar ejemplo",1) ];
  }

  ngOnInit(): void {
  }


 items: ingrediente[]
 input_cant:number;
 input_name:String;

 public agregarItem(){
    let item = new ingrediente(this.input_name,this.input_cant)
    this.items.push(item);
 }




}
