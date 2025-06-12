import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Horario {
  hora: string;
  estado: 'disponible' | 'reservado';
}

interface MedicoDetallado {
  id: string;
  nombre: string;
  especialidad: string;
  fotoUrl: string;
  turnosManana: Horario[];
  turnosTarde: Horario[];
}

@Component({
  selector: 'app-shift-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shift-confirmation.component.html',
  styleUrls: ['./shift-confirmation.component.css']
})
export class ShiftConfirmationComponent implements OnInit {

  medico: MedicoDetallado | undefined;
  isLoading: boolean = true;
  turnoSeleccionado: Horario | null = null;
  mostrarModalConfirmacion: boolean = false;

  private medicosDisponibles: MedicoDetallado[] = [
    {
      id: 'doc-01',
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Cardiología',
      fotoUrl: '',
      turnosManana: [
        { hora: '09:00 AM', estado: 'disponible' },
        { hora: '09:30 AM', estado: 'reservado' },
        { hora: '10:00 AM', estado: 'disponible' },
        { hora: '10:30 AM', estado: 'disponible' },
        { hora: '11:00 AM', estado: 'reservado' },
        { hora: '11:30 AM', estado: 'disponible' },
      ],
      turnosTarde: [
        { hora: '02:00 PM', estado: 'disponible' },
        { hora: '02:30 PM', estado: 'reservado' },
        { hora: '03:00 PM', estado: 'disponible' },
      ]
    },
    {
      id: 'doc-04',
      nombre: 'Dra. Ana Gómez',
      especialidad: 'Dermatología',
      fotoUrl: '',
      turnosManana: [
        { hora: '08:00 AM', estado: 'reservado' },
        { hora: '08:30 AM', estado: 'reservado' },
        { hora: '09:00 AM', estado: 'disponible' },
        { hora: '09:30 AM', estado: 'disponible' },
      ],
      turnosTarde: [
        { hora: '04:00 PM', estado: 'disponible' },
        { hora: '04:30 PM', estado: 'disponible' },
      ]
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idMedico = this.route.snapshot.paramMap.get('idMedico');
    if (idMedico) {
      this.cargarDatosMedico(idMedico);
    } else {
      console.error('No se encontró ID de médico en la ruta.');
      this.isLoading = false;
    }
  }

  cargarDatosMedico(idMedico: string): void {
    this.isLoading = true;
    setTimeout(() => {
      this.medico = this.medicosDisponibles.find(m => m.id === idMedico);
      this.isLoading = false;
    }, 500); 
  }

  seleccionarTurno(turno: Horario): void {
    if (turno.estado === 'disponible') {
      this.turnoSeleccionado = turno;
      this.mostrarModalConfirmacion = true; 
    }
  }

  cancelarConfirmacion(): void {
    this.turnoSeleccionado = null;
    this.mostrarModalConfirmacion = false; 
  }

  confirmarCita(): void {
    if (this.turnoSeleccionado) {
      console.log('Cita confirmada con:', this.medico?.nombre, 'a las', this.turnoSeleccionado.hora);
      this.turnoSeleccionado.estado = 'reservado';
      alert('¡Tu turno ha sido confirmado exitosamente!');
      this.cancelarConfirmacion(); 
    }
  }
}
