import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";
@Component({
    selector: "store",
    templateUrl: "./store.component.html"
})
export class StoreComponent {

    public selectedCategory: string = null;
    public productsPerPage = 4;
    public selectedPage = 1;
    
    constructor(private repository: ProductRepository, private cart: Cart,
        private router: Router) { }

    get products(): Product[] {
        // console.log('products');
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        // console.log('categories');
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        // console.log('changeCategory', newCategory);
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        // console.log('changePage', newPage);
        this.selectedPage = newPage;
    }

    changePageSize(event: any) {
        // console.log('changePageSize', event);
        this.productsPerPage = Number(event.target.value);
        this.changePage(1);
    }

    get pageCount(): number {
        let pagecount = Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
        console.log('pagecount', pagecount);
        return pagecount;
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
        // this.router.navigateByUrl("/cart");
    }
/*
    get pageNumbers(): number[] {
        console.log('pageNumbers');
        return Array(Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0).map((x, i) => i + 1);
    }
*/
}