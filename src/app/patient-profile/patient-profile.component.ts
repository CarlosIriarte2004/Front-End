import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common'; 
import { PatientProfileService, PacienteInfo, HistorialEntry } from '../services/patient-profile.service'; 

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class PatientProfileComponent implements OnInit {

  public paciente: PacienteInfo | null = null;
  public historialMedico: HistorialEntry[] = [];
  public isLoading: boolean = true; 
  public errorMessage: string | null = null; 

  icons = {
    nombre: '👤', cedula: '🆔', sangre: '🩸', nacionalidad: '🌍',
    telefonoFijo: '📞', telefonoMovil: '📱', email: '✉️',
    fechaNacimiento: '🎂', sexo: '🚻', estadoCivil: '💍',
    lugarNacimiento: '📍', direccion: '🏠', emergencia: '🆘', estado: '⚖️'
  };

  constructor(private profileService: PatientProfileService) { } 

  ngOnInit(): void {
    this.cargarDatos(); 
  }

  cargarDatos(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.profileService.getProfileAndHistoryData().subscribe({
      next: (response) => {
        this.paciente = response.paciente;
        this.historialMedico = response.historial;
        this.isLoading = false;
        console.log('Datos del perfil cargados:', this.paciente);
        console.log('Historial médico cargado:', this.historialMedico);
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar la información del perfil. Por favor, intente más tarde.';
        this.isLoading = false;
        console.error('Error en el componente al cargar datos:', err);
      }
    });
  }
}