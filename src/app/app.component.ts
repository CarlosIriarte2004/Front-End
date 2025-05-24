// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // O solo RouterOutlet si no necesitas más de RouterModule aquí

@Component({
  selector: 'app-root', // o tu selector de AppComponent
  standalone: true,
  imports: [
    RouterModule // <-- Asegúrate de tener esto
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisinfo1-Proyec'; // Asumo que este es el nombre de tu proyecto
}