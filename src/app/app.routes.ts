import { Routes } from '@angular/router';
import { PatientLoginComponent } from './patient-login/patient-login.component'; // Verifica que esta ruta sea correcta a tu archivo .ts
import { AdminLoginComponent } from './admin-login/admin-login.component';     // Verifica que esta ruta sea correcta a tu archivo .ts
import { HospitalLoginComponent} from './hospital-login/hospital-login.component';
import { ShiftRecordComponent } from './shift-record/shift-record.component';

export const routes: Routes = [
  // Ruta para la página de login de paciente
  {
    path: 'login-paciente', // Cuando la URL sea http://localhost:4200/login-paciente
    component: PatientLoginComponent
  },
  // Ruta para la página de login de administrador central
  {
    path: 'login-admin',    // Cuando la URL sea http://localhost:4200/login-admin
    component: AdminLoginComponent
  },
  {
    path: 'login-hospital',
    component: HospitalLoginComponent
  },

  {
    path: 'registro-turno', 
    component: ShiftRecordComponent
  },
  // --- Rutas Adicionales Recomendadas ---

  // Redirección por defecto: Si alguien va a la raíz del sitio (http://localhost:4200/)
  // lo redirigimos automáticamente a la página de login de paciente.
  {
    path: '', // Ruta vacía (la raíz)
    redirectTo: '/login-paciente', // Redirige a esta ruta
    pathMatch: 'full' // Importante: la ruta debe ser exactamente vacía
  },

  // (Opcional) Ruta comodín para URLs no encontradas:
  // Si quieres manejar rutas que no existen, puedes redirigir a una página por defecto
  // o a un componente específico de "Página no encontrada" (que tendrías que crear).
  // Por ahora, podríamos redirigir también al login de paciente:
  {
    path: '**', // Atrapa cualquier ruta no definida anteriormente
    redirectTo: '/login-paciente' // O a una página "404 Not Found" si la tienes
  }
];