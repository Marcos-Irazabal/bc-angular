import { Component, OnInit } from '@angular/core';
import { ingrediente } from 'src/Ingrediente.model';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  constructor() { 
    this.recetas= [ new Receta("Manzana acaramelada","https://elfogongaucho.com.ar/fogon/wp-content/uploads/2021/08/mila-con-frita.jpg", "tiene mucho azucar", this.auxiliar)];
  }

  ngOnInit(): void {
  }

 auxiliar:ingrediente[]=[(new ingrediente("Manzana ejemplo",2)) ];
 recetas: Receta[]
 input_name:String;
 input_url:"https://elfogongaucho.com.ar/fogon/wp-content/uploads/2021/08/mila-con-frita.jpg";
 input_descripcion:String;


 public agregarReceta(){
    let item = new Receta(this.input_name,this.input_url,this.input_descripcion,this.auxiliar)
    this.recetas.push(item);
 }

}
