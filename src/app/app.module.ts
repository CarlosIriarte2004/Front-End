import { HttpClientModule } from '@angular/common/http';
import { PacientesPenalizadosComponent } from './pacientes-penalizados/pacientes-penalizados.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    // otros componentes...
    PacientesPenalizadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule // si vas a usar formularios
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

