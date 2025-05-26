import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-pagina-medico',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './pagina-medico.component.html',
  styleUrls: ['./pagina-medico.component.css']
})
export class PaginaMedicoComponent {
  turnosRegistrados = [
    {
      paciente: 'Pedro Pascal Ríos',
      fecha: '17/04/2025',
      hora: '10:00'
    },
    {
      paciente: 'Patricia Walton Reque',
      fecha: '23/08/2025',
      hora: '09:00'
    },
    {
      paciente: 'Pablo Martinez Vega',
      fecha: '27/06/2025',
      hora: '09:00'
    },
    {
      paciente: 'Maria Juana Rivera Cespedes',
      fecha: '17/04/2025',
      hora: '15:00'
    },
    {
      paciente: 'Juan Hector Perez Solis',
      fecha: '01/11/2025',
      hora: '10:00'
    },
    {
      paciente: 'Maria Juana Rivera Cespedes',
      fecha: '27/06/2025',
      hora: '10:00'
    }
  ];

  constructor(private router: Router) {} 


 goToNuevoTurno(): void {
    this.router.navigate(['/nuevo-turno']); 
    console.log('Navegando a la página de nuevo turno...');
  }

  goToLoginPage(): void {
    this.router.navigate(['/login-doctor']);
    console.log('Navegando a la página de login del doctor...');
  }

  verEnCalendario(turno: any): void {
    console.log('Ver en calendario:', turno);
  }
}