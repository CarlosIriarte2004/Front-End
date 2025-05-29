import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 

interface TurnoPendiente {
  id: string;
  especialidad: string;
  doctor: string;
  fecha: string; 
  hora: string;
  lugar: string;
  estado: 'Confirmado' | 'Por Confirmar' | 'Cancelado' | 'Reprogramar'; 
  notas?: string;
}

@Component({
  selector: 'app-pending-shifts',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './pending-shifts.component.html',
  styleUrls: ['./pending-shifts.component.css']
})
export class PendingShiftsComponent implements OnInit {

  turnosPendientes: TurnoPendiente[] = [];
  nombrePaciente: string = "Nombre Paciente"; 

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
  }

  cancelarTurno(turnoId: string): void {
    console.log('Intentando cancelar turno ID:', turnoId);
    const turno = this.turnosPendientes.find(t => t.id === turnoId);
    if (turno) {
      turno.estado = 'Cancelado'; 
    }
  }
  
  navegarA(ruta: string): void {
    this.router.navigate([ruta]);
  }
}