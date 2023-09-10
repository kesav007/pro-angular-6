import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Router } from "@angular/router";

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent {
  constructor(public cart: Cart, router: Router) { }
}
