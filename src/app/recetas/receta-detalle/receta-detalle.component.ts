import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecetaServiceService } from 'src/app/services/receta-service.service';
import { Receta } from 'src/app/models/receta.model';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit{

  constructor(private route:ActivatedRoute, private miServicio:RecetaServiceService) { 

  }
  recetas:Receta[];
  recetaActual:Receta;
  indiceQuery:number;

  ngOnInit(): void {
    this.recetas=this.miServicio.getItems();
    this.indiceQuery = this.route.snapshot.queryParams["indicehtml"];
    this.recetaActual=this.recetas[this.indiceQuery];
  }

  show(){ //actualizacion In Real Time
    this.recetaActual = this.recetas[this.route.snapshot.queryParams["indicehtml"]];
    return true;
  }

  public addToCart(){
    this.miServicio.addToCarrito(this.recetaActual);
  }

}
