import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-patient-login',
  standalone: true, 
  imports: [
    CommonModule,     
    FormsModule,      
  ],
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css'] 
})
export class PatientLoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLoginSubmit(): void {
    console.log('Datos de login:', this.loginData);
    if (this.loginData.email && this.loginData.password) {
      alert('Inicio de sesión simulado exitoso!');
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