import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la navegación

// Interfaz para definir la estructura de una cita
interface Cita {
  id: string;
  doctor: string;
  fecha: string;
  hora: string;
}

@Component({
  selector: 'app-pagina-hospital',
  standalone: true, // El componente es standalone
  imports: [CommonModule], // Importa CommonModule para directivas como *ngFor
  templateUrl: './pagina-hospital.component.html', // Ruta al archivo HTML
  styleUrls: ['./pagina-hospital.component.css'] // Ruta al archivo CSS
})
export class PaginaHospitalComponent implements OnInit {

  // Array de citas de ejemplo para la "Bandeja de entrada"
  citas: Cita[] = [
    { id: '1', doctor: 'Martin Cespedes Burgos', fecha: '23/08/2025', hora: '09:00' },
    { id: '2', doctor: 'Sergio Tomas Claros Caceres', fecha: '01/11/2025', hora: '10:00' },
    { id: '3', doctor: 'Patricia Orozco Martinez', fecha: '17/04/2025', hora: '15:00' }
  ];

  constructor(private router: Router) { } // Inyecta el servicio Router

  ngOnInit(): void {
    // Lógica de inicialización del componente si es necesaria
  }

  /**
   * Maneja la acción de "Ver en calendario" para una cita.
   * @param cita La cita que se desea ver.
   */
  verEnCalendario(cita: Cita): void {
    console.log(`Ver en calendario: Cita con el Dr. ${cita.doctor} el ${cita.fecha} a las ${cita.hora}`);
    // Aquí podrías añadir lógica para redirigir a una vista de calendario
    // o abrir un modal con los detalles de la cita.
  }

  /**
   * Maneja la acción de "Cancelar cita".
   * @param id El ID de la cita a cancelar.
   */
  cancelarCita(id: string): void {
    console.log(`Cancelar cita con ID: ${id}`);
    // Filtra la cita del array para simular la cancelación
    this.citas = this.citas.filter(cita => cita.id !== id);
    // Aquí se podría añadir una llamada a un servicio para actualizar la base de datos
  }

  /**
   * Simula la navegación a la página de inicio de sesión.
   * Esto es solo un ejemplo de cómo podrías usar el router.
   */
  goToLogin(): void {
    this.router.navigate(['/login']); // Navega a la ruta de login
  }
}
