import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {

    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.cartPrice += (line.quantity * line.product.price);
            this.itemCount += line.quantity;
        });
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
}

class CartLine {
    constructor(public product: Product, public quantity: number) { }

    get lineTotal(): number {
        return this.product.price * this.quantity;
    }
}