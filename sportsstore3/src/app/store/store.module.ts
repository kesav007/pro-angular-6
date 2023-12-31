import { NgModule } from '@angular/core';
import { ModelModule } from '../model/model.module';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, 
        CartSummaryComponent, CartDetailComponent, CartCheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CartCheckoutComponent]
})
export class StoreModule { }