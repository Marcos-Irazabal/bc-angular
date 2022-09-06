import { Component, OnInit } from '@angular/core';
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

 public getServiceCarro(){
  return this.miServicio.getItems();
 }
}
