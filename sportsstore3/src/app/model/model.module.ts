import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart]
})

export class ModelModule{}