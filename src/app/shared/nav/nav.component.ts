import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  estaAutenticado=false;

  constructor(private authService: AuthService)
  {
    this.authService.isLogginOn.subscribe(
      {
        next: (data) => {
          this.estaAutenticado=data;
        },
        error: (error) => {
          this.estaAutenticado=false;
        }
      }
    )
  }
}
