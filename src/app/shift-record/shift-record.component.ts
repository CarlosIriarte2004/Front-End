import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
  iconoUrl: string; 
}

@Component({
  selector: 'app-shift-record',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './shift-record.component.html',
  styleUrls: ['./shift-record.component.css']
})
export class ShiftRecordComponent implements OnInit {
  searchTerm: string = '';
  especialidades: Especialidad[] = [];
  especialidadesFiltradas: Especialidad[] = [];

  nombreUsuario: string = "Tomas"; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarEspecialidades();
    this.filtrarEspecialidades(); 
  }

  cargarEspecialidades(): void {
    this.especialidades = [
      { id: 'cardiologia', nombre: 'Cardiologia', descripcion: 'Cuidado del corazón y sistema circulatorio.', iconoUrl: '/assets/iconos/cardio.png' },
      { id: 'dermatologia', nombre: 'Dermatologia', descripcion: 'Enfermedades de la piel, cabello y uñas.', iconoUrl: '/assets/iconos/dermatologia.png' },
      { id: 'pediatria', nombre: 'Pediatria', descripcion: 'Salud y enfermedades de los niños.', iconoUrl: '/assets/iconos/pediatria.png' },
      { id: 'ginecologia', nombre: 'Ginecologia', descripcion: 'Salud del sistema reproductor femenino.', iconoUrl: '/assets/iconos/ginecologia.png' },
      { id: 'traumatologia', nombre: 'Traumatologia', descripcion: 'Lesiones del aparato locomotor.', iconoUrl: '/assets/iconos/traumatologia.png' },
      { id: 'hematologia', nombre: 'Hematologia', descripcion: 'Enfermedades de la sangre y en organos hematopoyéticos.', iconoUrl: '/assets/iconos/hematologia.png' }
    ];
  }

  filtrarEspecialidades(): void {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.especialidadesFiltradas = this.especialidades;
    } else {
      const terminoBusqueda = this.searchTerm.toLowerCase().trim();
      this.especialidadesFiltradas = this.especialidades.filter(especialidad =>
        especialidad.nombre.toLowerCase().includes(terminoBusqueda) ||
        especialidad.descripcion.toLowerCase().includes(terminoBusqueda)
      );
    }
    console.log('Buscando:', this.searchTerm);
  }

  verMedicosPorEspecialidad(especialidadId: string): void {
    console.log('Ver médicos para la especialidad:', especialidadId);
  }

  verPerfilUsuario(): void {
    console.log('Ir al perfil del usuario');
    this.router.navigate(['/perfil-paciente']);
  }

  verCitasPendientes(): void {
    console.log('Ver citas pendientes');
    this.router.navigate(['/turnos-pendientes']);
  }

  verNotificaciones(): void {
    console.log('Ver notificaciones');
  }
}