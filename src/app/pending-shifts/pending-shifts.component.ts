import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor, *ngIf, ngClass
import { Router } from '@angular/router'; // Para navegación si es necesario

// Interfaz para un turno pendiente
interface TurnoPendiente {
  id: string;
  especialidad: string;
  doctor: string;
  fecha: string; // Podría ser Date, pero string es más simple para mock data
  hora: string;
  lugar: string;
  estado: 'Confirmado' | 'Por Confirmar' | 'Cancelado' | 'Reprogramar'; // Para hacerlo más interesante visualmente
  notas?: string;
}

@Component({
  selector: 'app-pending-shifts',
  standalone: true,
  imports: [CommonModule], // CommonModule es esencial para *ngFor, *ngIf, ngClass
  templateUrl: './pending-shifts.component.html',
  styleUrls: ['./pending-shifts.component.css']
})
export class PendingShiftsComponent implements OnInit {

  turnosPendientes: TurnoPendiente[] = [];
  nombrePaciente: string = "Nombre Paciente"; // Eventualmente vendrá de un servicio de autenticación

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cargarTurnosSimulados();
  }

  cargarTurnosSimulados(): void {
    this.turnosPendientes = [
      {
        id: 't001',
        especialidad: 'Cardiología',
        doctor: 'Dr. Juan Pérez',
        fecha: '10/06/2025',
        hora: '10:00 AM',
        lugar: 'Consultorio 301, Clínica Salud Total',
        estado: 'Confirmado',
        notas: 'Traer estudios anteriores.'
      },
      {
        id: 't002',
        especialidad: 'Dermatología',
        doctor: 'Dra. Ana Gómez',
        fecha: '12/06/2025',
        hora: '03:30 PM',
        lugar: 'Centro Médico Piel Sana, Consultorio 5',
        estado: 'Por Confirmar',
      },
      {
        id: 't003',
        especialidad: 'Pediatría',
        doctor: 'Dr. Carlos Luna',
        fecha: '15/06/2025',
        hora: '09:15 AM',
        lugar: 'Hospital de Niños, Ala Norte',
        estado: 'Confirmado'
      },
      {
        id: 't004',
        especialidad: 'Cardiología',
        doctor: 'Dr. Juan Pérez',
        fecha: '20/06/2025',
        hora: '11:00 AM',
        lugar: 'Consultorio 301, Clínica Salud Total',
        estado: 'Reprogramar',
        notas: 'El doctor solicitó reprogramar. Contactar para nueva fecha.'
      }
    ];
  }

  verDetallesTurno(turnoId: string): void {
    console.log('Ver detalles del turno ID:', turnoId);
    // Aquí podrías navegar a una página de detalle del turno si existiera
    // this.router.navigate(['/detalle-turno', turnoId]);
    alert('Funcionalidad "Ver Detalles" aún no implementada.');
  }

  cancelarTurno(turnoId: string): void {
    console.log('Intentando cancelar turno ID:', turnoId);
    // Simulación: Cambiar estado a cancelado o eliminarlo de la lista
    const turno = this.turnosPendientes.find(t => t.id === turnoId);
    if (turno) {
      // En una app real, no lo eliminarías así o llamarías a un servicio.
      // Para simular y hacerlo "interesante", cambiamos su estado.
      // O podrías filtrarlo: this.turnosPendientes = this.turnosPendientes.filter(t => t.id !== turnoId);
      turno.estado = 'Cancelado'; // Esto requeriría que el template refleje el estado "Cancelado"
      alert(`Turno ${turnoId} marcado como cancelado (simulación).`);
    }
  }
  
  // Navegaciones para la barra superior (si decides hacerla similar a pagina-hospital)
  navegarA(ruta: string): void {
    this.router.navigate([ruta]);
  }
}