import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  public selectedCategory: string = null;

  public productsPerPage = 4;

  public selectedPage = 1;

  constructor(private productRepository: ProductRepository, private cart: Cart){}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.productRepository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.productRepository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number){
    this.productsPerPage = newSize;
  }

/*
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage)).fill(0).map((x, i) => i + 1);
  }
*/

  get pageCount(): number {
    return Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  addProductToCart(product: Product){
    this.cart.addLine(product);
  }
}