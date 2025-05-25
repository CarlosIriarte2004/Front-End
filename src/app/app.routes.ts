import { Routes } from '@angular/router';
import { LoginMedicoComponent } from './login-medico/login-medico.component'; // Asegúrate de que la ruta sea correcta

// Routes: Un array de objetos que definen las rutas de tu aplicación.
export const routes: Routes = [
  {
    path: '', // La ruta vacía, que significa la raíz de tu aplicación (por ejemplo, 'localhost:4200/')
    component: LoginMedicoComponent // El componente que se mostrará cuando la ruta sea la raíz
  },
  // Puedes añadir más rutas aquí para otras páginas
];
