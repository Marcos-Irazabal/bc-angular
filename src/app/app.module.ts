import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CarroServiceService } from './services/carro-service.service';
import { RecetaDetalleComponent } from './recetas/receta-detalle/receta-detalle.component';
import { FormCarritoTemplateComponent } from './Formularios/form-carrito-template/form-carrito-template.component';

const appRouters:Routes=[
  {path: "carrito",component:CarritoComponent},
  {path: "recetas",component:RecetasComponent, 
  children:[{path: "detalles/:id",component:RecetaDetalleComponent}]
  }
  //{path: "",component:AppComponent} esto me duplica el index
]


@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    CarritoComponent,
    RecetaDetalleComponent,
    FormCarritoTemplateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters),

  ],
  providers: [CarroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
