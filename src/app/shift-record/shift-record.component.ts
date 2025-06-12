import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   
import { PatientProfileService } from '../services/patient-profile.service';

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

  constructor(private router: Router, private profileService: PatientProfileService) {}

  ngOnInit(): void {
    this.profileService.getPacienteName().subscribe({
      next: (response) => {
        this.nombreUsuario = response;
        console.log('Datos del Usuario:', this.nombreUsuario);
      }
    })
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
      { id: 'hematologia', nombre: 'Hematologia', descripcion: 'Enfermedades de la sangre y en organos hematopoyéticos.', iconoUrl: '/assets/iconos/hematologia.png' },
      { id: 'neumologia' , nombre: 'Neumologia' , descripcion: 'Enfermedades del aparato respiratorio.' , iconoUrl: '/assets/iconos/cardio.png'},
      { id: 'alergologia-inmunologia', nombre: 'Alergología e Inmunología', descripcion: 'Trastornos del sistema inmunitario, alergias y defensas.', iconoUrl: '/assets/iconos/inmuno.png' },
      { id: 'cirugia-cardiovascular', nombre: 'Cirugía Cardiovascular', descripcion: 'Operaciones del corazón y los grandes vasos sanguíneos.', iconoUrl: '/assets/iconos/cirugia-cardio.png' },
      { id: 'cirugia-bariatrica', nombre: 'Cirugía Bariátrica', descripcion: 'Procedimientos quirúrgicos para el tratamiento de la obesidad.', iconoUrl: '/assets/iconos/cirugia-bariatrica.png' },
      { id: 'cirugia-plastica', nombre: 'Cirugía Plástica', descripcion: 'Restauración o mejora de la forma y función corporal.', iconoUrl: '/assets/iconos/cirugia-plastica.png' },
      { id: 'diabetologia', nombre: 'Diabetología', descripcion: 'Estudio, diagnóstico y tratamiento de la diabetes mellitus.', iconoUrl: '/assets/iconos/diabetologia.png' },
      { id: 'ecografia', nombre: 'Ecografía', descripcion: 'Diagnóstico por imágenes utilizando ondas de ultrasonido.', iconoUrl: '/assets/iconos/ecografia.png' },
      { id: 'endocrinologia', nombre: 'Endocrinología', descripcion: 'Estudio de las glándulas de secreción interna y hormonas.', iconoUrl: '/assets/iconos/endocrinologia.png' },
      { id: 'gastroenterologia', nombre: 'Gastroenterología', descripcion: 'Enfermedades del esófago, estómago, intestinos y demás órganos digestivos.', iconoUrl: '/assets/iconos/gastro.png' },
      { id: 'geriatria', nombre: 'Geriatría', descripcion: 'Salud y enfermedades de las personas adultas mayores.', iconoUrl: '/assets/iconos/geriatria.png' },
      { id: 'medicina-general', nombre: 'Medicina General', descripcion: 'Atención primaria integral para todas las edades y patologías comunes.', iconoUrl: '/assets/iconos/medicina-general.png' },
      { id: 'nefrologia', nombre: 'Nefrología', descripcion: 'Estudio de la estructura y función renal, y sus enfermedades.', iconoUrl: '/assets/iconos/nefrologia.png' },
      { id: 'neurocirugia', nombre: 'Neurocirugía', descripcion: 'Tratamiento quirúrgico de enfermedades del sistema nervioso.', iconoUrl: '/assets/iconos/neurocirugia.png' },
      { id: 'neurologia', nombre: 'Neurología', descripcion: 'Diagnóstico y tratamiento de enfermedades del sistema nervioso.', iconoUrl: '/assets/iconos/neurologia.png' },
      { id: 'nutricion', nombre: 'Nutrición', descripcion: 'Estudio de la alimentación y su relación con la salud y la enfermedad.', iconoUrl: '/assets/iconos/nutricion.png' },
      { id: 'odontologia', nombre: 'Odontología', descripcion: 'Diagnóstico, tratamiento y prevención de enfermedades del aparato estomatognático.', iconoUrl: '/assets/iconos/odontologia.png' },
      { id: 'oftalmologia', nombre: 'Oftalmología', descripcion: 'Enfermedades y cirugía de los ojos y la visión.', iconoUrl: '/assets/iconos/oftanmologia.png' },
      { id: 'oncologia', nombre: 'Oncología', descripcion: 'Estudio y tratamiento de los tumores benignos y malignos (cáncer).', iconoUrl: '/assets/iconos/oncologia.png' },
      { id: 'otorrinolaringologia', nombre: 'Otorrinolaringología', descripcion: 'Enfermedades del oído, vías respiratorias superiores (nariz, faringe, laringe) y cuello.', iconoUrl: '/assets/iconos/otorrino.png' },
      { id: 'psiquiatria', nombre: 'Psiquiatría', descripcion: 'Estudio, prevención y tratamiento de los trastornos mentales.', iconoUrl: '/assets/iconos/psiquiatria.png' },
      { id: 'reumatologia', nombre: 'Reumatología', descripcion: 'Enfermedades del aparato locomotor y tejido conectivo.', iconoUrl: '/assets/iconos/reumatologia.png' },
      { id: 'urologia', nombre: 'Urología', descripcion: 'Enfermedades del aparato urinario y del aparato reproductor masculino.', iconoUrl: '/assets/iconos/urologia.png' }
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