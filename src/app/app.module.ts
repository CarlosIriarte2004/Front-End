import { PacientesPenalizadosComponent } from './pacientes-penalizados/pacientes-penalizados.component';

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

