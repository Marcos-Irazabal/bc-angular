import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ingrediente } from '../models/Ingrediente.model';
import { OrdenCompra } from '../models/OrdenCompra';
import { Receta } from '../models/receta.model';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:String=""

  constructor(private http:HttpClient,private authService:LoginServiceService) { }

  subirRecetas(recipes:Receta[]){

    const token =this.authService.token;

    return this.http.put("https://recetas-bc-angular-default-rtdb.firebaseio.com/recetas.json?auth="+token,recipes).subscribe(
      respuesta => console.log(respuesta)
    )
  }

  subirOrdenCompra(ordenes:OrdenCompra[]){
    const token =this.authService.token;
    return this.http.put("https://recetas-bc-angular-default-rtdb.firebaseio.com/ordenes.json?auth="+token,ordenes).subscribe(
      respuesta => console.log(respuesta)
    )
  }

  descargarRecetas(){
    const token =this.authService.token;
    return this.http.get<Receta[]>("https://recetas-bc-angular-default-rtdb.firebaseio.com/recetas.json?auth="+token);
  }

  descargarOrdenesCompra(){
    const token =this.authService.token;
    return this.http.get<OrdenCompra[]>("https://recetas-bc-angular-default-rtdb.firebaseio.com/ordenes.json?auth="+token);
  }



}
