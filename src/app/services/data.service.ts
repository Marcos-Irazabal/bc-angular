import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ingrediente } from '../models/Ingrediente.model';
import { OrdenCompra } from '../models/OrdenCompra';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:String=""

  constructor(private http:HttpClient) { }

  subirRecetas(recipes:Receta[]){
    return this.http.put("https://recetas-bc-angular-default-rtdb.firebaseio.com/recetas.json",recipes).subscribe(
      respuesta => console.log(respuesta)
    )
  }

  subirOrdenCompra(ordenes:OrdenCompra[]){
    return this.http.put("https://recetas-bc-angular-default-rtdb.firebaseio.com/ordenes.json",ordenes).subscribe(
      respuesta => console.log(respuesta)
    )
  }

  descargarRecetas(){
    return this.http.get<Receta[]>("https://recetas-bc-angular-default-rtdb.firebaseio.com/recetas.json");
  }

  descargarOrdenesCompra(){
    return this.http.get<OrdenCompra[]>("https://recetas-bc-angular-default-rtdb.firebaseio.com/ordenes.json");
  }



}
