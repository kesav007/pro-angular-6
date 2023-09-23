import { Component } from '@angular/core';
import { AuthService } from '../model/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private authService: AuthService, private router: Router) {

  }
  logout() { 
    this.authService.clear();
    this.router.navigateByUrl("/")
  }
}
