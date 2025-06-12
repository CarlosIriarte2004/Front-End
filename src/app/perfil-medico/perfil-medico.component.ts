import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicProfileService } from '../services/medic-profile.service';

export interface MedicoProfile {
  fotoUrl?: string;
  nombreCompleto: string;
  fechaNacimiento: string;
  cedulaIdentidad: string;
  sexo: string;
  tipoSangre: string;
  estadoCivil: string;
  nacionalidad: string;
  lugarNacimiento: string;
  direccion: string;
  telefonoMovil: string;
  numeroEmergencia: string;
  trabajaEn: string;
}

@Component({
  selector: 'app-perfil-medico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-medico.component.html',
  styleUrls: ['./perfil-medico.component.css']
})
export class PerfilMedicoComponent implements OnInit {

  @Input() medicoId: string | number | null = null;
  public isLoading: boolean = true; 
  public errorMessage: string | null = null; 

  medico: MedicoProfile = {
    fotoUrl: 'assets/images/doctor-sin-fondo.png',
    nombreCompleto: 'Gabriel Aparicio Beltran',
    fechaNacimiento: '17/08/1995',
    cedulaIdentidad: '9887560',
    sexo: 'Masculino',
    tipoSangre: 'A-',
    estadoCivil: 'Casado',
    nacionalidad: 'Boliviano',
    lugarNacimiento: 'Santa Cruz',
    direccion: 'Av. Villazon',
    telefonoMovil: '(+591) 76787432',
    numeroEmergencia: '(+591) 72340129',
    trabajaEn: 'Clínica Los Olivos'
  };

 constructor(private servicioPerfilMedico: MedicProfileService) { }

  ngOnInit(): void {
     console.log('PerfilMedicoComponent inicializado');
     this.cargarDatos();
  }
  cargarDatos(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.servicioPerfilMedico.getMedicoInfo().subscribe({
      next: (response) => {
        this.medico = response;
        this.isLoading = false;
        console.log('Datos del perfil cargados:', this.medico);
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar la información del perfil. Por favor, intente más tarde.';
        this.isLoading = false;
        console.error('Error en el componente al cargar datos:', err);
      }
    });
  }
}