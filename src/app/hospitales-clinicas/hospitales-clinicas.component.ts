import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 esto importa *ngFor

@Component({
  selector: 'app-hospitales-clinicas',
  standalone: true, // 👈 importante si es standalone
  imports: [CommonModule], // 👈 esto habilita *ngFor y *ngIf
  templateUrl: './hospitales-clinicas.component.html',
  styleUrls: ['./hospitales-clinicas.component.css']
})
export class HospitalesClinicasComponent {
  hospitales: any[] = [];
  clinicas: any[] = [];
}
