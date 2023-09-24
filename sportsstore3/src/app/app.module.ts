import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './store/cart-checkout/cart-checkout.component';
import { StoreFirstGuard } from './store/storeFirst.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule,

  RouterModule.forRoot([
    {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
    {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
    {path: 'checkout', component: CartCheckoutComponent, canActivate: [StoreFirstGuard]},    
    {path: '**', redirectTo: '/store'}
  ])
],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
