import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Product } from "./product.model";
import { Order } from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

    baseURL: string;
    auth_token: string

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

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseURL + "login", {
            name: user, password: pass
        }).pipe(
            map(response => {
                this.auth_token = response.success ? response.token : null;
                return response.success;
            })
        );
    }

    getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<$(this.auth_token)>`
            })
        };
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseURL + "products", product, this.getOptions())
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.baseURL}products/${product.id}`, product, this.getOptions());
    }

    deleteProduct(id: number): Observable<Product>{
        return this.http.delete<Product>(`${this.baseURL}products/${id}`, this.getOptions());
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseURL + "orders", this.getOptions());
    }

    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(`${this.baseURL}orders/${id}`, this.getOptions());
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseURL}orders/${order.id}`, order, this.getOptions());        
    }
}