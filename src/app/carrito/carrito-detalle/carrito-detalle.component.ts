import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ingrediente } from 'src/app/models/Ingrediente.model';
import { CarroServiceService } from 'src/app/services/carro-service.service';

@Component({
  selector: 'app-carrito-detalle',
  templateUrl: './carrito-detalle.component.html',
  styleUrls: ['./carrito-detalle.component.css']
})
export class CarritoDetalleComponent implements OnInit {

  listaIngredientes:Array<ingrediente>;
  indiceQuery:number;
  ingredienteActual:ingrediente;

  cantActual:number;

  constructor(private carroService:CarroServiceService, private route:ActivatedRoute, private router:Router) { }



  ngOnInit(): void {
    this.indiceQuery = this.route.snapshot.queryParams["indicehtml"];
    this.listaIngredientes=this.carroService.getItems();
    this.ingredienteActual=this.listaIngredientes[this.indiceQuery];

    this.cantActual=this.ingredienteActual.cantidad;
  }

  show(){ //actualizacion In Real Time
    this.ingredienteActual = this.listaIngredientes[this.route.snapshot.queryParams["indicehtml"]];
    return true;
  }

  deleteIngrediente(){
    this.listaIngredientes.splice(this.indiceQuery,1);
    console.log(this.listaIngredientes);
    this.router.navigate(["carrito"]);
  }

  actualizarIngrediente(){
    this.carroService.items[this.indiceQuery].cantidad=this.cantActual;
    this.router.navigate(["carrito"]);
  }


  
}
