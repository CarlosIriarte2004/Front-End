import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   
import { ClinicaService } from '../services/clinica.service';

@Component({
  selector: 'app-hospital-login',
  standalone: true, 
  imports: [
    CommonModule,     
    FormsModule,      
  ],
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css'] 
})
export class HospitalLoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router,private clinicService: ClinicaService) { }

  onLoginSubmit(): void {
    console.log('Datos de login:', this.loginData);
    if (this.loginData.email && this.loginData.password) {
      this.clinicService.loginClinica(
        this.loginData.email,
        this.loginData.password
      ).subscribe({
        next: res => {
          console.log('Login existoso', res);
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/pagina-clinica']);
        },
        error: err => {
          console.error('Login Fallido:', err);
          alert('Correo o contraseña incorrectos.')
        }
      });

    } else {
      alert('Por favor, ingresa email y contraseña.');
    }
  }

  navigateToRegistration(): void {
    console.log("Navegar a registro - asegúrate de tener la ruta configurada");
  }

  onForgotPassword(): void {
    console.log('Olvidó su contraseña presionado');
  }
}