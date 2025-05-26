import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Cita {
  id: string;
  doctor: string;
  fecha: string;
  hora: string;
}

@Component({
  selector: 'app-pagina-hospital',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './pagina-hospital.component.html', 
  styleUrls: ['./pagina-hospital.component.css'] 
})
export class PaginaHospitalComponent implements OnInit {

  citas: Cita[] = [
    { id: '1', doctor: 'Martin Cespedes Burgos', fecha: '23/08/2025', hora: '09:00' },
    { id: '2', doctor: 'Sergio Tomas Claros Caceres', fecha: '01/11/2025', hora: '10:00' },
    { id: '3', doctor: 'Patricia Orozco Martinez', fecha: '17/04/2025', hora: '15:00' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  verEnCalendario(cita: Cita): void {
    console.log(`Ver en calendario: Cita con el Dr. ${cita.doctor} el ${cita.fecha} a las ${cita.hora}`);
   
  }

  cancelarCita(id: string): void {
    console.log(`Cancelar cita con ID: ${id}`);
    this.citas = this.citas.filter(cita => cita.id !== id);
    // Aquí se podría añadir una llamada a un servicio para actualizar la base de datos
  }

  goToLogin(): void {
    this.router.navigate(['/login']); // Navega a la ruta de login
  }
}
