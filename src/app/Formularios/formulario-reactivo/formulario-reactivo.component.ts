import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {  }

  addItem(){
    this.miServicio.agregarItem(this.formularioGrupo.value.nombre,this.formularioGrupo.value.cantidad); 
  }
}
