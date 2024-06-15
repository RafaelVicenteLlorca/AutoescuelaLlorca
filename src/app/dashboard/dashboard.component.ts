import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  userId: number;
constructor(private autService: AuthService, private router: Router)
{

}


logout() {
  console.log("hola");
  this.autService.logout();
  this.router.navigate(['/login']);
}

}
