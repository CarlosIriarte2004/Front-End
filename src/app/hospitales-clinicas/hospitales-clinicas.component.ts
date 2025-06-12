import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospitales-clinicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospitales-clinicas.component.html',
  styleUrls: ['./hospitales-clinicas.component.css']
})
export class HospitalesClinicasComponent {
  hospitales: any[] = []; // 👈 Vacío pero definido
  clinicas: any[] = [];   // 👈 Vacío pero definido
}
