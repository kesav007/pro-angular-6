import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./store/storeFirst.guard";
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { CartCheckoutComponent } from "./store/cart-checkout/cart-checkout.component";

@NgModule({
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: "checkout", component: CartCheckoutComponent, canActivate: [StoreFirstGuard] },
      {
        path: "admin",
        loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule),
        canActivate: [StoreFirstGuard]
      },
      { path: '**', redirectTo: "/store" }
    ])
  ],
  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
