import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLoginSubmit(): void {
    console.log('Datos de login:', this.loginData);
    if (this.loginData.email && this.loginData.password) {
      this.router.navigate(['/pagina-medico']);
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