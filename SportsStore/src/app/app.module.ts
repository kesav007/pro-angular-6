import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { FormsModule } from "@angular/forms";
import { StoreComponent } from './store/store.component';
@NgModule({
  declarations: [
    AppComponent, StoreComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    FormsModule
  ],
  exports: [StoreComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
