import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})

export class ObjetosComponent implements OnInit {

  objetos= new Array<string>;

  formObj:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpClient) {
    this.formObj=this.fb.group({
      nombre:[""]
    })
   }


  ngOnInit(): void {
  }

  agregarObjeto(){
    this.objetos.push(this.formObj.value.nombre);
    return this.http.put("https://recetas-bc-angular-default-rtdb.firebaseio.com/objetos.json",this.objetos).subscribe(
      respuesta => console.log(respuesta)
    )
  }//auth!=null

}
