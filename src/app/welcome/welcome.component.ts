import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-welcome',
  standalone: true, 
  imports: [
    CommonModule    

  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent {

  constructor(private router: Router) {}  

  navegarLoginPaciente(): void {
    this.router.navigate(['/login-paciente']);
  }

  navegarLoginMedico(): void {
    this.router.navigate(['/login-medico']); 
  }

  navegarLoginAdmin(): void {
    this.router.navigate(['/login-admin']); 
  }

  navegarLoginHospital(): void {
    this.router.navigate(['/login-hospital']);
  }
}