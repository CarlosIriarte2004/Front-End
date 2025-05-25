// src/app/shift-record/shift-record.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Para *ngFor, *ngIf
import { FormsModule } from '@angular/forms';   // Para el buscador ([(ngModel)])
// Si la barra de navegación superior fuera un componente separado, lo importarías aquí.
// import { NavbarPacienteComponent } from '../navbar-paciente/navbar-paciente.component';

// Interfaz para definir la estructura de una especialidad
interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
  iconoUrl: string; // Ruta al icono/imagen de la especialidad
}

@Component({
  selector: 'app-shift-record',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule, // Si usas routerLink directamente en la plantilla para los botones de especialidad
    // NavbarPacienteComponent // Si la barra de navegación fuera un componente separado
  ],
  templateUrl: './shift-record.component.html',
  styleUrls: ['./shift-record.component.css']
})
export class ShiftRecordComponent implements OnInit {
  searchTerm: string = '';
  especialidades: Especialidad[] = [];
  especialidadesFiltradas: Especialidad[] = [];

  // Simulación de datos del usuario logueado (eventualmente vendrá de un servicio)
  nombreUsuario: string = "Tomas"; // Reemplaza con datos reales o de un servicio

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí cargarías las especialidades, por ahora usamos datos simulados
    this.cargarEspecialidades();
    this.filtrarEspecialidades(); // Para mostrar todas al inicio
  }

  cargarEspecialidades(): void {
    // Datos simulados (mock data) - En un futuro, esto vendría de un servicio/API
    this.especialidades = [
      { id: 'cardiologia', nombre: 'Cardiología', descripcion: 'Cuidado del corazón y sistema circulatorio.', iconoUrl: '/assets/iconos/cardio.png' },
      { id: 'dermatologia', nombre: 'Dermatología', descripcion: 'Enfermedades de la piel, cabello y uñas.', iconoUrl: '/assets/iconos/dermatologia.png' },
      { id: 'pediatria', nombre: 'Pediatría', descripcion: 'Salud y enfermedades de los niños.', iconoUrl: '/assets/iconos/pediatria.png' },
      { id: 'ginecologia', nombre: 'Ginecología', descripcion: 'Salud del sistema reproductor femenino.', iconoUrl: '/assets/iconos/ginecologia.png' },
      { id: 'traumatologia', nombre: 'Traumatología', descripcion: 'Lesiones del aparato locomotor.', iconoUrl: '/assets/iconos/traumatologia.png' },
      { id: 'hematologia', nombre: 'Hematologia', descripcion: 'Enfermedades de la sangre y en organos hematopoyéticos.', iconoUrl: '/assets/iconos/hematologia.png' }

      // ... añade más especialidades según necesites
    ];
    // Asegúrate de tener estas imágenes/iconos en la ruta especificada o ajústalas.
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
    // Aquí también podrías implementar la lógica para buscar directamente médicos si el término es muy específico
    console.log('Buscando:', this.searchTerm);
  }

  verMedicosPorEspecialidad(especialidadId: string): void {
    console.log('Ver médicos para la especialidad:', especialidadId);
    // Aquí navegarías a una página que liste los médicos de esa especialidad
    // Por ejemplo: this.router.navigate(['/medicos', especialidadId]);
    // Necesitarás crear esa ruta y el componente correspondiente más adelante.
    alert('Navegación a médicos de ' + especialidadId + ' (aún no implementada)');
  }

  // Funciones placeholder para los botones del header
  verPerfilUsuario(): void {
    console.log('Ir al perfil del usuario');
    // this.router.navigate(['/perfil-paciente']);
  }

  verCitasPendientes(): void {
    console.log('Ver citas pendientes');
    // this.router.navigate(['/citas-pendientes']);
  }

  verNotificaciones(): void {
    console.log('Ver notificaciones');
    // this.router.navigate(['/notificaciones']);
  }
}