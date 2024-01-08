import { Component } from '@angular/core';
import { User } from '../../models/login/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: User = new User();

  constructor(
    private router: Router
  ){

  }

  logIn(){
    sessionStorage.setItem('Guard', 'fasfasf');
    console.log(sessionStorage.getItem('Guard'));
    this.router.navigate(['dashboard']); 
  }
}
