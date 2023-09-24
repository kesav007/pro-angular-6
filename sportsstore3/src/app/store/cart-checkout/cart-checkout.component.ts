import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent {
  submitted: boolean = false;
  orderSent: boolean = false;
  constructor(public repository: OrderRepository, public order: Order) { }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if(form.valid){
      this.repository.saveOrder(this.order).subscribe(
        order => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
        })
    }
  }
}
