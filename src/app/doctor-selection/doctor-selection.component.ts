import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, Router } from '@angular/router'; 


interface Medico {
  id: string;
  nombre: string;
  especialidadesIds: string[]; 
  fotoUrl: string;
  resumen: string;
}

interface Especialidad {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-doctor-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-selection.component.html',
  styleUrls: ['./doctor-selection.component.css']
})
export class DoctorSelectionComponent implements OnInit {

  medicosMostrados: Medico[] = [];
  especialidadActual: Especialidad | undefined;
  isLoading: boolean = true;

  private todosLosMedicos: Medico[] = [
    { id: 'doc-01', nombre: 'Dr. Juan Pérez', especialidadesIds: ['cardiologia', 'medicina-general'], fotoUrl: '', resumen: 'Especialista en enfermedades coronarias con 15 años de experiencia.' },
    { id: 'doc-02', nombre: 'Dra. Elena Corazón', especialidadesIds: ['cardiologia'], fotoUrl: '', resumen: 'Experta en ecocardiografías y pruebas de esfuerzo.' },
    { id: 'doc-03', nombre: 'Dr. Félix Herrera', especialidadesIds: ['cardiologia'], fotoUrl: '', resumen: 'Enfocado en la prevención de riesgos cardiovasculares.' },
    { id: 'doc-04', nombre: 'Dra. Ana Gómez', especialidadesIds: ['dermatologia'], fotoUrl: '', resumen: 'Tratamientos de acné, psoriasis y dermatología cosmética.' },
    { id: 'doc-05', nombre: 'Dr. Pedro Piel', especialidadesIds: ['dermatologia', 'medicina-general'], fotoUrl: '', resumen: 'Especialista en detección temprana de cáncer de piel.' },
    { id: 'doc-06', nombre: 'Dr. Carlos Luna', especialidadesIds: ['pediatria'], fotoUrl: '', resumen: 'Cuidado pediátrico integral desde el nacimiento hasta la adolescencia.' }
  ];

  private todasLasEspecialidades: Especialidad[] = [
    { id: 'cardiologia', nombre: 'Cardiología' },
    { id: 'dermatologia', nombre: 'Dermatología' },
    { id: 'pediatria', nombre: 'Pediatría' },
    { id: 'medicina-general', nombre: 'Medicina General'},
    
  ];

  constructor(
    private route: ActivatedRoute, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idEspecialidad = params.get('idEspecialidad'); 

      if (idEspecialidad) {
        this.cargarDatos(idEspecialidad);
      } else {
        console.error('No se proporcionó ID de especialidad en la ruta.');
        this.isLoading = false;
      }
    });
  }

  cargarDatos(idEspecialidad: string): void {
    this.isLoading = true;

    this.especialidadActual = this.todasLasEspecialidades.find(esp => esp.id === idEspecialidad);

    this.medicosMostrados = this.todosLosMedicos.filter(medico =>
      medico.especialidadesIds.includes(idEspecialidad)
    );

    setTimeout(() => {
      this.isLoading = false;
    }, 300); 
  }

  seleccionarMedico(idMedico: string): void {
    console.log('Médico seleccionado con ID:', idMedico);
  }
}