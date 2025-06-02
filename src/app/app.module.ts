/*import { PacientesPenalizadosComponent } from './pacientes-penalizados/pacientes-penalizados.component';

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
export class AppModule { }*/

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    // otros módulos...
    HttpClientModule,
  ],
  // ...
})
export class AppModule { }


