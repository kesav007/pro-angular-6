import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{

    public id: number;
    public name:string;
    public address:string;
    public city:string;
    public state:string;
    public zip:string;
    public country:string;    
    public shipped:boolean;

    constructor(public cart: Cart){}

    clear(){
        this.cart.clear();
    }
}