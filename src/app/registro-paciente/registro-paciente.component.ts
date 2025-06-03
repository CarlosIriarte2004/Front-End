import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { PatientRegisterService } from '../services/patient.register.service';

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
  contrasena: string; // ✅ Campo agregado
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
    correoElectronico: '',
    contrasena: '' // ✅ Inicializado
  };

   verContrasena: boolean = false;

  constructor(
    private router: Router,
    private patientsRegister: PatientRegisterService
  ) {}

  crearCuenta(): void {
    console.log('Datos del paciente a registrar:', this.paciente);
    // ✅ Opcional para pruebas (borrar luego en producción)
    console.log('Contraseña ingresada:', this.paciente.contrasena);

    if (!this.paciente.nombreCompleto || !this.paciente.cedulaIdentidad || !this.paciente.correoElectronico || !this.paciente.contrasena) {
      console.error('Por favor, complete los campos obligatorios (Nombre, Cédula, Correo, Contraseña).');
      return;
    }

    const datosTransformados = {
      ci: this.paciente.cedulaIdentidad,
      nombre: this.paciente.nombreCompleto.split(' ')[0],
      apellido: this.paciente.nombreCompleto.split(' ').slice(1).join(' '),
      contrasenia: this.paciente.contrasena, // ✅ Contraseña real del usuario
      estadoCivil: this.paciente.estadoCivil,
      direccion: this.paciente.direccion,
      correoElectronico: this.paciente.correoElectronico,
      tipoSangre: this.paciente.tipoSangre,
      telefono: Number(this.paciente.telefonoCelular || this.paciente.telefonoFijo || 0),
      lugarNac: this.paciente.lugarNacimiento,
      genero: this.paciente.genero,
      fechaNac: this.paciente.fechaNacimiento
};

    this.patientsRegister.crearPaciente(datosTransformados).subscribe({
      next: (res) => {
        alert('Paciente registrado con éxito');
      },
      error: (err) => {
        console.error('Error al registrar paciente:', err);
        alert('Error al registrar paciente');
      }
    });
  }
}
