import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 


export interface PacienteInfo {
  nombreCompleto: string;
  cedulaIdentidad: string;
  tipoSangre: string;
  nacionalidad: string;
  telefonoFijo?: string;
  telefonoMovil: string;
  correoPersonal: string;
  fechaNacimiento: string;
  sexo: string;
  estadoCivil: string;
  lugarNacimiento: string;
  direccion: string;
  numeroEmergencia: string;
  estadoPenalizacion: string;
  fotoUrl?: string;
}

export interface HistorialEntry {
  fecha: string;
  tipo: string;
  descripcion: string;
  doctor?: string;
}

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
  standalone: true, 
  imports: [
    CommonModule 
  ]
})
export class PatientProfileComponent implements OnInit {

  public paciente: PacienteInfo | null = null;
  public historialMedico: HistorialEntry[] = [];

  icons = {
    nombre: '👤',
    cedula: '🆔',
    sangre: '🩸',
    nacionalidad: '🌍',
    telefonoFijo: '📞',
    telefonoMovil: '📱',
    email: '✉️',
    fechaNacimiento: '🎂',
    sexo: '🚻',
    estadoCivil: '💍',
    lugarNacimiento: '📍',
    direccion: '🏠',
    emergencia: '🆘',
    estado: '⚖️'
  };

  constructor() { }

  ngOnInit(): void {
    this.paciente = {
      nombreCompleto: 'Juan Hector Perez Solis',
      cedulaIdentidad: '9867867',
      tipoSangre: 'ORH +',
      nacionalidad: 'Boliviana',
      telefonoFijo: '4865248',
      telefonoMovil: '(+591) 72598635',
      correoPersonal: 'HectorPeSol@gmail.com',
      fechaNacimiento: '28/08/2001',
      sexo: 'Masculino',
      estadoCivil: 'Soltero',
      lugarNacimiento: 'Cochabamba',
      direccion: 'Av. America y Santa cruz',
      numeroEmergencia: '(+591) 75864931',
      estadoPenalizacion: 'No penalizado',
      fotoUrl: '/assets/images/foto-perfil.png',
    };

    this.historialMedico = [
      { fecha: '2024-05-10', tipo: 'Consulta General', descripcion: 'Chequeo de rutina, presión arterial normal.', doctor: 'Dr. Alan Poe' },
      { fecha: '2024-03-15', tipo: 'Examen de Sangre', descripcion: 'Resultados dentro de los rangos normales.', doctor: 'Laboratorio clínico' },
      { fecha: '2023-11-02', tipo: 'Vacunación', descripcion: 'Vacuna contra la influenza.', doctor: 'Enf. María Sol' },
    ];
  }
}