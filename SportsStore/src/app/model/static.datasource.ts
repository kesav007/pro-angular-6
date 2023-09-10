import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 12),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 15),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 23),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 13),
        new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 15),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 17),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 20),
        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 33),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 43),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 45),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 23),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 56),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 99),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 10),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 30),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}
