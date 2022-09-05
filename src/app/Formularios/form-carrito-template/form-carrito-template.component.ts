import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ingrediente } from 'src/app/models/Ingrediente.model';
import { CarroServiceService } from 'src/app/services/carro-service.service';

@Component({
  selector: 'app-form-carrito-template',
  templateUrl: './form-carrito-template.component.html',
  styleUrls: ['./form-carrito-template.component.css']
})
export class FormCarritoTemplateComponent implements OnInit {

  constructor(private miServicio:CarroServiceService) { }
  items= this.miServicio.getItems();
  ngOnInit(): void {
  }

  addItem(form: NgForm){
    this.miServicio.agregarItem(form.value.input_text,form.value.input_cant); 
  }

}
