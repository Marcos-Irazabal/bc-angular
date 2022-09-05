import { Component, OnInit } from '@angular/core';
import { ingrediente } from 'src/app/models/Ingrediente.model';
import { CarroServiceService } from '../services/carro-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private miServicio:CarroServiceService) { 
  }

  ngOnInit(): void {
    }

 input_cant:number;
 input_name:String;

 public agregarItem(){ 
    let item = new ingrediente(this.input_name,this.input_cant)
    this.miServicio.addItem(item);
 }
 
 public getServiceCarro(){
  return this.miServicio.getItems();
 }

 public mostrarArray(){
  this.miServicio.mostrarArray();
 }




}
