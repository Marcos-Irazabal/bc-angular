import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecetaServiceService } from 'src/app/services/receta-service.service';
import { Receta } from 'src/app/models/receta.model';


@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit{

  constructor(private route:ActivatedRoute, private servicioRecetas:RecetaServiceService) { }

  indiceQuery:number;
  indice:number;
  recetas:Receta[];
  recetaActual:Receta;


  ngOnInit(): void {
    this.indice = this.route.snapshot.params["id"]; //parametro simple por url

    this.indiceQuery = this.route.snapshot.queryParams["indicehtml"]; // parametro por queryparams

    this.recetas= this.servicioRecetas.getItems();
    this.recetaActual = this.recetas[this.indice];
  }

  show(){ //actualizacion In Real Time
    this.recetaActual = this.recetas[this.route.snapshot.queryParams["indicehtml"]];
    return true;
  }

  public addToCart(){
    this.servicioRecetas.addToCarrito(this.recetaActual);
  }




  


}
