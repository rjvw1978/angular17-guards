import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  form: FormGroup;



  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router:Router){
    console.log("login component is workding")
    this.form= this.formBuilder.group(
      {
        email:['eve.holt@reqres.in', [Validators.required, Validators.email]],
        password:['cityslicka',[Validators.required]]
      }
    )
  }

  login()
  {
    
    this.authService.login(this.form.value ).subscribe(
      {
        next: (data) => {
          console.log("Se dio acceso")
          this.router.navigateByUrl("/panel-control/operaciones")
        },
        error: (error) => {
          alert("ERROR " + error)
        }
      }
    )
  }

}
