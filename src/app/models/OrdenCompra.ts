import { ingrediente } from "./Ingrediente.model";

export class OrdenCompra{
    ingredientes:ingrediente[];
    usuario:String;

    constructor(l:ingrediente[],u:String){
        this.ingredientes=l;
        this.usuario=u;
    }
}