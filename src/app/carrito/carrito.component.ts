import { Component, OnChanges, OnInit } from '@angular/core';
import { ingrediente } from '../models/Ingrediente.model';
import { OrdenCompra } from '../models/OrdenCompra';
import { CarroServiceService } from '../services/carro-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit,OnChanges {

  arrayAux:Array<OrdenCompra>=[];

  HayItemsEnCarro:boolean;
  constructor(private miServicio:CarroServiceService, private servicioHttp:DataService) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.miServicio.getSujeto$().subscribe( bool => {this.HayItemsEnCarro = bool})
    if (this.HayItemsEnCarro){this.arrayAux= []}
  }




 public getServiceCarro(){
  return this.miServicio.getItems();
 }

 generateOrder(){
  this.arrayAux.push(new OrdenCompra(this.miServicio.getItems()));
  this.servicioHttp.subirOrdenCompra(this.arrayAux);
  this.arrayAux=[];
}

}
