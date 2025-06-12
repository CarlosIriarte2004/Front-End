import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-hospitales-clinicas', 
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './hospitales-clinicas.component.html', 
  styleUrl: './hospitales-clinicas.component.css' 
})
export class HospitalesClinicasComponent {

  constructor(private router: Router) { } 

  verMedicos(): void {
    this.router.navigate(['/pagina-clinica/lista-medicos']);
  }
}
