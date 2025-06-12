import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-medico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-medico.component.html',
  styleUrls: ['./registro-medico.component.css']
})
export class RegistroMedicoComponent {

  medico = {
    nombreCompleto: '',
    fechaNacimiento: '',
    cedulaIdentidad: '',
    sexo: '',
    tipoSangre: '',
    estadoCivil: '',
    nacionalidad: '',
    lugarNacimiento: '',
    direccion: '',
    telefonoMovil: '',
    numeroEmergencia: '',
    trabajaEn: '',
    correoElectronico: '',
    contrasena: ''        
  };

  verContrasena = false;

  constructor(private router: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Formulario Enviado');
      console.log(this.medico);
      form.resetForm();
    } else {
      console.log('El formulario no es válido.');
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
