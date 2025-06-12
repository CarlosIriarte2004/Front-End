import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Cita {
  id: number;
  doctor: string;
  fecha: string;
  hora: string;
  tipo: string;
  puedeCancelar: boolean;
}

@Component({
  selector: 'app-pagina-clinica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-clinica.component.html',
  styleUrls: ['./pagina-clinica.component.css']
})
export class PaginaClinicaComponent {
  citas: Cita[] = [
    {
      id: 1,
      doctor: 'Martin Cespedes Burgos',
      fecha: '23/08/2025',
      hora: '09:00',
      tipo: 'Cancelo cita',
      puedeCancelar: true
    },
    {
      id: 2,
      doctor: 'Arnold Alois Schwarzenegger',
      fecha: '01/11/2025',
      hora: '10:00',
      tipo: 'Cancelo cita',
      puedeCancelar: true
    },
    {
      id: 3,
      doctor: 'Patricia Orozco Martinez',
      fecha: '17/04/2025',
      hora: '15:00',
      tipo: 'Cancelo cita',
      puedeCancelar: true
    }
  ];

 constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('PaginaClinicaComponent inicializado');
  }

  goToCalendario(): void {
    this.router.navigate(['/calendario-clinica']);
    console.log('Navegando a la página de calendario...');
  }

  goToSobreNosotros(): void {
    this.router.navigate(['/sobre-nosotros']);
    console.log('Navegando a sobre nosotros...');
  }

  goToSoporte(): void {
    this.router.navigate(['/soporte']);
    console.log('Navegando a soporte...');
  }

  goToRegistroMedico(): void {
    this.router.navigate(['/registro-medico']);
    console.log('Navegando a registro medico...');
  }

  verEnCalendario(cita: Cita): void {
    console.log('Ver en calendario:', cita);
    alert(`Cita con ${cita.doctor} el ${cita.fecha} a las ${cita.hora} - Abriendo calendario... (simulado)`);
  }

  cancelarCita(citaId: number): void {
    console.log('Cancelar cita ID:', citaId);
    const cita = this.citas.find(c => c.id === citaId);
    if (cita) {
      const confirmacion = true; 
      if (confirmacion) {
        this.citas = this.citas.filter(c => c.id !== citaId);
        console.log('Cita cancelada:', cita);
      } else {
        console.log('Cancelación de cita abortada por el usuario.');
      }
    }
  }

  handleSignIn(): void {
    console.log('Botón Sign In presionado en PaginaClinicaComponent (simulación)');
  }
}
