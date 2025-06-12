import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

// Componentes propios
import { PacientesPenalizadosComponent } from './pacientes-penalizados/pacientes-penalizados.component';
import { HospitalesClinicasComponent } from './hospitales-clinicas/hospitales-clinicas.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesPenalizadosComponent,
    HospitalesClinicasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
