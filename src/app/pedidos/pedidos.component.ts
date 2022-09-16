import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { OrdenCompra } from '../models/OrdenCompra';
import { DataService } from '../services/data.service';
import { LoginServiceService } from '../services/login-service.service';
import { PedidosServiceService } from '../services/pedidos-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  page_size:number =3;
  page_number:number=1;
  pageSizeOptions=[3,5,10];

  ordenesActuales:Array<OrdenCompra>;

  constructor(private loginService:LoginServiceService,private pedidoSvc:PedidosServiceService,private router:Router) { }

  ngOnInit(): void {
    this.ordenesActuales=this.pedidoSvc.getOrdenesDelUsuario();
    //this.pedidoSvc.getOrdenesDeUsuario$().subscribe( res => {this.ordenesActuales = res})
    console.log(this.ordenesActuales);
  }


  showOrdenes(){
    //console.log("mostrar error");
    return (this.ordenesActuales.length == 0);
  }

  handlePage(e: PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }

  deleteOrder(numOrder:number){
    let orden_a_eLiminar =this.ordenesActuales[numOrder];
    this.pedidoSvc.eliminarOrden(orden_a_eLiminar);
    this.router.navigate(["pedidos"]);
  }


}
