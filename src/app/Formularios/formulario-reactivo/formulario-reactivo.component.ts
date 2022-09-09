import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CarroServiceService } from 'src/app/services/carro-service.service';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioGrupo:FormGroup; //mismo nombre q le pusimos en el html

  constructor(private fb:FormBuilder, private miServicio:CarroServiceService) { 
    this.formularioGrupo=this.fb.group({
      nombre:["",[Validators.required]],
      cantidad:[0,[Validators.required,Validators.min(1)]],
      /*name referencia input del form : ["valor por defecto en el form",[array de validaciones]] 
      ej: [0,[validators.required,validators.minLenght(2)]] */
    })
  }

  ngOnInit(): void { 
    // this.miServicio.getSujeto$().subscribe(b => {this.poseeItems=(b>0)})
   }


  addItem(){
    this.miServicio.agregarItem(this.formularioGrupo.value.nombre,this.formularioGrupo.value.cantidad); 
  }
/*
  clearForm(){
    if(window.confirm("Borrar todos los items del carro?")){
      this.miServicio.deleteItems();
    }
  }
*/

}
