import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Product } from "./product.model";
import { Order } from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

    baseURL: string;

    constructor(private http: HttpClient) { 
        this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        // this.baseURL = 'http://localhost:3500/';
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseURL + "products");
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return this.http.post<Order>(this.baseURL + "orders", order);
    }

}