import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { CarroServiceService } from 'src/app/services/carro-service.service';

@Component({
  selector: 'app-form-carrito-template',
  templateUrl: './form-carrito-template.component.html',
  styleUrls: ['./form-carrito-template.component.css']
})
export class FormCarritoTemplateComponent implements OnInit {

  input_text:String="";
  input_cant:number;
  constructor(private miServicio:CarroServiceService) { }
  ngOnInit(): void {
  }

  addItem(form: NgForm){
    this.input_text=form.value.input_text;
    this.input_cant=form.value.input_cant;
    this.miServicio.agregarItem(this.input_text,this.input_cant); 
  }



}
