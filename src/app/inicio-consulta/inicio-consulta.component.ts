import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './inicio-consulta.component.html',
  styleUrls: ['./inicio-consulta.component.css']
})
export class InicioConsultaComponent {

  accessCode: string = '';
  patientHistory: string = '';
  errorMessage: string = '';

  
  constructor(private router: Router) {}

  checkAccessCode(): void {
    this.errorMessage = '';
    // Simulación de validación del código de acceso
    if (this.accessCode === '12345') { 
      this.patientHistory = `
        Nombre del Paciente: Juan Pérez
        Fecha de Nacimiento: 15/03/1980
        Historial Médico:
        - 01/01/2023: Consulta por resfriado común. Medicación: Paracetamol.
        - 10/05/2023: Revisión anual. Presión arterial normal.
        - 20/11/2023: Lesión de tobillo. Reposo y antiinflamatorios.
        - 05/02/2024: Vacunación anual contra la gripe.
        - 12/04/2025: Última consulta: Dolor de cabeza persistente. Se recomienda análisis.
      `;
    } else {
      this.errorMessage = 'Código de acceso incorrecto. Por favor, intente de nuevo.';
      this.patientHistory = ''; 
    }
  }
}