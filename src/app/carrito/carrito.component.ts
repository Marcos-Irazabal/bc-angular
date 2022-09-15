import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  ingredienteActual:ingrediente;
  cantActual:number;
  indiceActual:number;
  showDetalles:boolean=false;
  listaIngredientes:ingrediente[];
  showDeleteAll:boolean=true;

  objetos= new Array<string>;

 
  constructor(private miServicio:CarroServiceService, private servicioHttp:DataService, private router:Router) { 
  }

  ngOnInit(): void {
    this.listaIngredientes=this.miServicio.getItems();
    if(this.listaIngredientes.length > 0){this.showDeleteAll=false;}

    this.servicioHttp.descargarOrdenesCompra().subscribe(act => {
      this.arrayAux=Object.values(act);
    })

    this.objetos=null;
    this.servicioHttp.descargarObjetos().subscribe(objs => {console.log(objs); this.objetos=objs});
  }

  ngOnChanges(){
    this.miServicio.getSujeto$().subscribe( bool => {this.showDetalles = bool})
    if (this.showDetalles){this.router.navigate(["carrito"])}
    if(this.listaIngredientes.length > 0){this.showDeleteAll=false;}
   
  }

 public getServiceCarro(){
  let ing =this.miServicio.getItems();
  if(ing.length > 0){this.showDeleteAll=false;}
  return ing;
 }

 generateOrder(){
  this.arrayAux.push(new OrdenCompra(this.miServicio.getItems()));
  this.servicioHttp.subirOrdenCompra(this.arrayAux);
  //this.arrayAux=[];
  this.miServicio.deleteItems();
  this.showDetalles=false;
  this.showDeleteAll=true;
}

selectItem(i:number){
  this.ingredienteActual=this.miServicio.items[i];
  this.showDetalles=true;
  this.indiceActual=i;
}


deleteIngredientes(){
  if(window.confirm("Borrar todos los items del carro?")){
    this.miServicio.deleteItems();
    this.showDetalles=false;
    this.showDeleteAll=true;
  }
}


deleteIngrediente(){
  this.listaIngredientes.splice(this.indiceActual,1);
  this.showDetalles=false;

  this.miServicio.cantidad$.next(this.listaIngredientes.length);
}

actualizarIngrediente(){
  this.miServicio.items[this.indiceActual].cantidad=this.cantActual;
  this.showDetalles=false;
}

}
