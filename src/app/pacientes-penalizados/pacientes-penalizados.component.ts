import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // 👈 solo si es standalone
  selector: 'app-pacientes-penalizados',
  templateUrl: './pacientes-penalizados.component.html',
  styleUrls: ['./pacientes-penalizados.component.css'],
  imports: [CommonModule] // 👈 IMPORTANTE para usar *ngFor
})
export class PacientesPenalizadosComponent {
  pacientes = [
    { nombre: 'Juan Pérez', ci: '12345678', motivo: 'Falta a turno', fecha: '2025-05-01' },
    { nombre: 'Ana Flores', ci: '87654321', motivo: 'Llegó tarde 3 veces', fecha: '2025-04-28' },
    { nombre: 'Carlos García', ci: '45678912', motivo: 'Cancelación sin aviso', fecha: '2025-04-15' }
  ];
}
