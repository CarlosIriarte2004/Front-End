import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 

interface Paciente {
  nombreCompleto: string;
  cedulaIdentidad: string;
  fechaNacimiento: string; 
  genero: string;
  tipoSangre: string;
  estadoCivil: string;
  nacionalidad: string;
  lugarNacimiento: string;
  direccion: string;
  telefonoFijo: string;
  telefonoCelular: string;
  correoElectronico: string;
}

@Component({
  selector: 'app-registro-paciente', 
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './registro-paciente.component.html', 
  styleUrls: ['./registro-paciente.component.css'] 
})
export class RegistroPacienteComponent {

  paciente: Paciente = {
    nombreCompleto: '',
    cedulaIdentidad: '',
    fechaNacimiento: '',
    genero: '',
    tipoSangre: '',
    estadoCivil: '',
    nacionalidad: '',
    lugarNacimiento: '',
    direccion: '',
    telefonoFijo: '',
    telefonoCelular: '',
    correoElectronico: ''
  };

  constructor(private router: Router) {}

  crearCuenta(): void {

    console.log('Datos del paciente a registrar:', this.paciente);


    if (!this.paciente.nombreCompleto || !this.paciente.cedulaIdentidad || !this.paciente.correoElectronico) {
      console.error('Por favor, complete los campos obligatorios (Nombre, Cédula, Correo).');
      return;
    }

    setTimeout(() => {
      console.log('Cuenta creada exitosamente para:', this.paciente.nombreCompleto);
      alert('¡Cuenta creada exitosamente!'); 
    }, 1500); 
  }
}

