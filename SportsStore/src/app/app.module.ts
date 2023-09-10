import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { FormsModule } from "@angular/forms";

import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart-detail.component';
import { CheckoutComponent } from './store/checkout.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    FormsModule,
    StoreModule,
    RouterModule.forRoot([
      {path: "store", component: StoreComponent},
      {path: "cart", component: CartDetailComponent},
      {path: "checkout", component: CheckoutComponent},
      {path: "**", redirectTo: "/store"}
    ])
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
