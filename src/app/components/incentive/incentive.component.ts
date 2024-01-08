import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-incentive',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './incentive.component.html',
  styleUrl: './incentive.component.scss'
})
export default class IncentiveComponent {
  constructor(private authservice: AuthService,
    private router: Router){}
  logOut(){
    this.authservice.logout();
    this.router.navigate(['']); 
  }
}
