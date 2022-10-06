import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  numero_0:number=0;
  numero_1:number=1;
  numero_2:number;
  numero_3:number=3;

  constructor() {

   }

  ngOnInit(): void {
  }

  num2Init():number{
    this.numero_2=this.numero_0 + this.numero_1;
    return this.numero_2;
  }

  suma(num1,num2:number):number{
    return num1+num2;
  }



}
