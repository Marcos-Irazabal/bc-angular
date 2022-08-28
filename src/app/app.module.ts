import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRouters:Routes=[
  {path: "carrito",component:CarritoComponent},
  {path: "recetas",component:RecetasComponent},
  {path: "",component:AppComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
