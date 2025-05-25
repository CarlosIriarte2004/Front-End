import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet para que las rutas funcionen

// Decorador @Component: Le dice a Angular que esta clase es un componente.
@Component({
  selector: 'app-root', // El nombre de la etiqueta HTML que usaremos para este componente (<app-root>)
  standalone: true, // Indica que este componente es "standalone" (autónomo)
  imports: [CommonModule, RouterOutlet], // Importa CommonModule y RouterOutlet
  templateUrl: './app.component.html', // La ruta a su archivo HTML
  styleUrl: './app.component.css' // La ruta a su archivo CSS
})
export class AppComponent {
  title = 'login-medico-app'; // Una propiedad simple para el título de la aplicación
}

