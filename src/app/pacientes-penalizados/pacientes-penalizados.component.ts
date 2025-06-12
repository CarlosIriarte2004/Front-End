import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pacientes-penalizados',
  templateUrl: './pacientes-penalizados.component.html',
  styleUrls: ['./pacientes-penalizados.component.css'],
  imports: [CommonModule]
})
export class PacientesPenalizadosComponent {
  pacientes: { nombre: string; ci: string; motivo: string; fecha: string }[] = [];
}
