import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CarroServiceService } from './services/carro-service.service';
import { RecetaDetalleComponent } from './recetas/receta-detalle/receta-detalle.component';
import { FormCarritoTemplateComponent } from './Formularios/form-carrito-template/form-carrito-template.component';
import { FormularioReactivoComponent } from './Formularios/formulario-reactivo/formulario-reactivo.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { CarritoDetalleComponent } from './carrito/carrito-detalle/carrito-detalle.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { SpinnerInterceptorInterceptor } from './Shared/spinner/spinner-interceptor.interceptor';
import { AuthGuardGuard } from './auth-guard.guard';
import { ObjetosComponent } from './objetos/objetos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmbellecedorModule } from './embellecedor/embellecedor.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PaginatePipe } from './Shared/paginate.pipe';
import { TestComponent } from './test/test.component';



const appRouters:Routes=[
  {path: "carrito",component:CarritoComponent,
  children:[{path: "carritoDetalle",component:CarritoDetalleComponent}],
  canActivate:[AuthGuardGuard]
  },
  {path: "recetas",component:RecetasComponent, 
  children:[{path: "detalles",component:RecetaDetalleComponent}],
  canActivate:[AuthGuardGuard]
  },
  {path: "login",component:LoginComponent},
  {path: "objetos",component:ObjetosComponent},
  {path: "pedidos",component:PedidosComponent,canActivate:[AuthGuardGuard]}
  
]


@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    CarritoComponent,
    RecetaDetalleComponent,
    FormCarritoTemplateComponent,
    FormularioReactivoComponent,
    CarritoDetalleComponent,
    LoginComponent,
    SpinnerComponent,
    ObjetosComponent,
    PedidosComponent,
    PaginatePipe,
    TestComponent,
  ],
  imports: [ //modulos que agregamos al proyecto
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule,
    BrowserAnimationsModule,

    EmbellecedorModule

  ],
  providers: [CarroServiceService, {provide: HTTP_INTERCEPTORS, useClass:SpinnerInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
