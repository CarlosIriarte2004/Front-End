import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
  ]
};
