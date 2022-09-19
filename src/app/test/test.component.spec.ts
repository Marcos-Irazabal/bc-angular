import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test 2
  it("numero 0 deberia valer 0 y numero deberia 1 valer 1",()=>{
    const fixture =TestBed.createComponent(TestComponent);
    const comp =fixture.componentInstance;
    expect (comp.numero_0).toBeTruthy;
    expect (comp.numero_1).toBeTruthy;
    expect (comp.numero_0).toEqual(0);
    expect (comp.numero_1).toEqual(1);
  });

  //test 3
  it("al iniciar numero 2 debe valer 1",()=>{
    const fixture =TestBed.createComponent(TestComponent);
    const comp =fixture.componentInstance;
    expect(comp.num2Init()).toEqual(1);
  });

  //test 4
  it("Test suma 1 + 3",()=>{
    const fixture =TestBed.createComponent(TestComponent);
    const comp =fixture.componentInstance;
    expect (comp.numero_3).toBeTruthy;
    expect (comp.numero_1).toBeTruthy;
    expect (comp.numero_3).toEqual(3);
    expect (comp.numero_1).toEqual(1);
    const num1=comp.numero_1;
    const num3=comp.numero_3;
    expect(comp.suma(num1,num3)).toEqual(4);
  });

  //test 5
  it("Testing html normal y con interpolacion",()=>{
    const fixture =TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const comp =fixture.componentInstance;
    const html = fixture.nativeElement
    expect(html.querySelector("span").textContent).toEqual("This is a span");
    expect(html.querySelector("h1").textContent).toContain("This is a h1, number 3 is equal to:3");
  });


})
