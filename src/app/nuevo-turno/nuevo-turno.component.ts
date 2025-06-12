import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-nuevo-turno', 
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './nuevo-turno.component.html', 
  styleUrls: ['./nuevo-turno.component.css'] 
})
export class NuevoTurnoComponent {
  nombrePaciente: string = '';
  especialidad: string = '';
  nombreMedico: string = '';
  fecha: string = ''; 
  hora: string = '';

  registrarTurno(): void {
    console.log('Registrando nuevo turno:', {
      nombrePaciente: this.nombrePaciente,
      especialidad: this.especialidad,
      nombreMedico: this.nombreMedico,
      fecha: this.fecha,
      hora: this.hora
    });
  }
}