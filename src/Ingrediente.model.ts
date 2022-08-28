export class ingrediente{
    private nombre:String;
    private cantidad:number;

    constructor(n:String,c:number){
        this.cantidad=c;
        this.nombre=n;
    }
    
    public getCantidad(){
        return this.cantidad;
    }
    public getNombre(){
        return this.nombre;
    }
    
}