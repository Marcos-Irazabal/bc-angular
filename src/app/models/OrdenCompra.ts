import { ingrediente } from "./Ingrediente.model";

export class OrdenCompra{
    ingredientes:ingrediente[];

    constructor(l:ingrediente[]){
        this.ingredientes=l;
    }
}