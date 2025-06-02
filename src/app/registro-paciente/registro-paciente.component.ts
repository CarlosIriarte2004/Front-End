import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { HttpClient, } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

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

  constructor(private router: Router, private http: HttpClient) {}

  crearCuenta(): void {

    console.log('Datos del paciente a registrar:', this.paciente);

    


    if (!this.paciente.nombreCompleto || !this.paciente.cedulaIdentidad || !this.paciente.correoElectronico) {
      console.error('Por favor, complete los campos obligatorios (Nombre, Cédula, Correo).');
      
      return;
    }

    const pacienteDTO = {
  ci: Number(this.paciente.cedulaIdentidad),
  nombre: this.paciente.nombreCompleto.split(' ')[0],
  apellido: this.paciente.nombreCompleto.split(' ').slice(1).join(' '),
  contrasenia: 'contraseniaTemporal123', // deberías capturarla en el formulario
  estadoCivil: this.paciente.estadoCivil,
  direccion: this.paciente.direccion,
  correoElectronico: this.paciente.correoElectronico,
  tipoSangre: this.paciente.tipoSangre,
  telefono: Number(this.paciente.telefonoCelular), // o combina fijo + celular
  lugarNac: this.paciente.lugarNacimiento,
  genero: this.paciente.genero
};


    this.http.post('http://localhost:3000/paciente', pacienteDTO).subscribe(
    response => {
      console.log('Cuenta creada exitosamente para:', this.paciente.nombreCompleto);
      alert('¡Cuenta creada exitosamente!');
    },
    error => {
      console.error('Error al crear la cuenta:', error);
      alert('Error al crear la cuenta.');
    }
  );

    setTimeout(() => {
      console.log('Cuenta creada exitosamente para:', this.paciente.nombreCompleto);
      alert('¡Cuenta creada exitosamente!'); 
    }, 1500); 
  }
}

