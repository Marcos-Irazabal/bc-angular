/*
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoginServiceService } from '../services/login-service.service';
import { PedidosServiceService } from '../services/pedidos-service.service';

import { PedidosComponent } from './pedidos.component';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosComponent ],
      providers:[ LoginServiceService, PedidosServiceService,Router,DataService,HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test 1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test 2
it("should be an empty array",()=>{
  const fixture =TestBed.createComponent(PedidosComponent);
  const comp =fixture.componentInstance;
  expect (comp.ordenesActuales).toBeTruthy;
  expect (comp.ordenesActuales).toEqual([]);
})


//test 3
it("shoul be true",()=>{
  const fixture =TestBed.createComponent(PedidosComponent);
  const comp =fixture.componentInstance;
  const expectedResult = true;
  const result =comp.showOrdenes();
  expect (result).toEqual(expectedResult);
})


});
*/