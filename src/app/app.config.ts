import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router'; // Ya lo tienes importado

import { routes } from './app.routes';          // <--- 1. IMPORTA TUS RUTAS DESDE app.routes.ts
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes)                       // <--- 2. AÑADE ESTO para registrar tus rutas
  ]
};