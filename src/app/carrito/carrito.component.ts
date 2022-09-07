import { Component, OnChanges, OnInit } from '@angular/core';
import { CarroServiceService } from '../services/carro-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit,OnChanges {

  cantItemsEnCarro:number;
  constructor(private miServicio:CarroServiceService) { 
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.miServicio.getSujeto$().subscribe( num => {this.cantItemsEnCarro = num})
  }

 public getServiceCarro(){
  return this.miServicio.getItems();
 }
}
