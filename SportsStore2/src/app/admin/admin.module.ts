import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from "./auth.component";
import { AdminComponent } from './admin.component';

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent },
    { path: "**", redirectTo: "auth" }
])

@NgModule({
    imports: [FormsModule, CommonModule, routing],
    declarations: [AuthComponent, AdminComponent],
    exports: [],
    providers: []
})
export class AdminModule { }