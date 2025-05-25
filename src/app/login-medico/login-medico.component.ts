import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]

@Component({
  selector: 'app-login-medico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-medico.component.html',
  styleUrl: './login-medico.component.css' // Asegúrate de que apunte a tu CSS
})
export class LoginMedicoComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() { }

  onLogin(): void {
    console.log('Intentando iniciar sesión con:', {
      email: this.email,
      password: this.password
    });

    if (this.email === 'doctor@saludtotal.com' && this.password === 'password123') {
      this.errorMessage = '';
      alert('¡Inicio de sesión exitoso!');
      // Aquí redirigirías al usuario a otra página
    } else {
      this.errorMessage = 'Email o contraseña incorrectos. Inténtalo de nuevo.';
      console.error('Error de inicio de sesión: Credenciales inválidas.');
    }
  }
}