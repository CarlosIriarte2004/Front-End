import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientRegisterService } from '../services/patient.register.service';

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

  constructor(private router: Router,
    private pacienteRegistro: PatientRegisterService
  ) { }

  onLoginSubmit(): void {
  console.log('Datos de login (Paciente):', this.loginData);

  if (this.loginData.email && this.loginData.password) {
    this.pacienteRegistro.loginPaciente(
      this.loginData.email,
      this.loginData.password
    ).subscribe({
      next: res => {
        console.log('Login exitoso', res);
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/registro-turno']); // ✅ Moved here
      },
      error: err => {
        console.error('Login fallido:', err);
        alert('Correo o contraseña incorrectos.');
      }
    });
  } else {
    alert('Por favor, ingresa email y contraseña.');
  }
}
  navigateToRegistration(): void {
    console.log("Navegando a la página de registro...");
    this.router.navigate(['/registro-paciente']);
  }

  onForgotPassword(): void {
    console.log('Olvidó su contraseña presionado');
  }
}