import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ingrediente } from '../models/Ingrediente.model';
import { OrdenCompra } from '../models/OrdenCompra';
import { DataService } from '../services/data.service';
import { LoginServiceService } from '../services/login-service.service';
import { PedidosServiceService } from '../services/pedidos-service.service';

 interface pedido{
  ingredientes:Array<ingrediente>;
  usuario:String;
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})


export class PedidosComponent implements OnInit {


  page_size:number =3;
  page_number:number=1;
  pageSizeOptions=[3,5,10];

  ordenesActuales:Array<pedido>;

  constructor(private loginService:LoginServiceService,private pedidoSvc:PedidosServiceService,private router:Router,private http:DataService) { 
    //this.ordenesActuales=this.pedidoSvc.getOrdenesDelUsuario();
  }

  ngOnInit(): void {
    this.ordenesActuales=this.pedidoSvc.getOrdenesDelUsuario();
  }


  showOrdenes(){
    return this.ordenesActuales.length==0;
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
