import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicRegisterService } from '../services/medic.register.service';

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
    especialidad: '',
    correoElectronico: '',
    contrasena: ''        
  };

  verContrasena = false;

  constructor(private router: Router,private servicioMedico: MedicRegisterService) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Formulario Enviado');
      console.log(this.medico);
      


      const datosTransformados = {
      ci: Number(this.medico.cedulaIdentidad),
      nombre: this.medico.nombreCompleto.split(' ')[0],
      apellido: this.medico.nombreCompleto.split(' ').slice(1).join(' '),
      contrasenia: this.medico.contrasena,
      fechaNac: this.medico.fechaNacimiento,
      estadoCivil: this.medico.estadoCivil,
      direccion: this.medico.direccion,
      correoElectronico: this.medico.correoElectronico,
      tipoSangre: this.medico.tipoSangre,
      telefono: Number(this.medico.telefonoMovil || 0),
      lugarNac: this.medico.lugarNacimiento,
      genero: this.medico.sexo,
      clinica:this.medico.trabajaEn,
      especialidad: this.medico.especialidad
    };

    this.servicioMedico.crearMedico(datosTransformados).subscribe({
      next: (res) => {
        alert('Medico registrado con éxito');
        form.resetForm();
      },
      error: (err) => {
        console.error('Error al registrar Medico:', err);
        alert('Error al registrar medico');
      }
    });
    } else {
      console.log('El formulario no es válido.');
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
