export class ingrediente{
    nombre:String;
    cantidad:number;

    constructor(n:String,c:number){
        this.cantidad=c;
        this.nombre=n;
    }
    
    public getCantidad():number{
        return this.cantidad;
    }
    public getNombre(){
        return this.nombre;
    }
    public setCantidad(cant:number){
        this.cantidad= cant;
    }
}