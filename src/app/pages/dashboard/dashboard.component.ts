import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{

  userAuth: any

  constructor(private authService: AuthService)
  {

  }

  ngOnInit(): void {

    this.authService.isLogginOn.subscribe
    (
      {
        next:(data) => {
          this.userAuth=data
          console.log(data)
        }
      
      }
    )
  }
}
