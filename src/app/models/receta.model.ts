import { ingrediente } from "src/app/models/Ingrediente.model";

export class Receta{
     nombre:String;
     foto_url:String;
    private descripcion:String;
     ingredientes:ingrediente[];

    constructor(n:String,f:String,d:String,i:ingrediente[]){
        this.nombre=n;
        this.foto_url=f;
        this.descripcion=d;
        this.ingredientes=i;
    }
    public getNombre(){
        return this.nombre;
    }
    public getFotoUrl(){
        return this.foto_url;
    }
    public getDescripcion(){
        return this.descripcion;
    }
    public getIngredientes(){
        return this.ingredientes;
    }

    
}