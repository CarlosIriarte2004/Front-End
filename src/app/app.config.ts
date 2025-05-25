import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de que esta importación sea correcta

// ApplicationConfig: Define la configuración de la aplicación.
export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter: Configura el sistema de rutas para tu aplicación.
    // Le pasamos el array de rutas que definimos en app.routes.ts.
    // Esto reemplaza la necesidad de AppRoutingModule.
    provideRouter(routes)
  ]
};
