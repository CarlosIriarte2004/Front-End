import { Routes } from '@angular/router';

import { PatientLoginComponent } from './patient-login/patient-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';
import { ShiftRecordComponent } from './shift-record/shift-record.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';
import { PaginaMedicoComponent } from './pagina-medico/pagina-medico.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NuevoTurnoComponent } from './nuevo-turno/nuevo-turno.component';
import { InicioConsultaComponent } from './inicio-consulta/inicio-consulta.component';
import { CalendarDoctorComponent } from './calendar-doctor/calendar-doctor.component';
import { CalendarAdminComponent } from './calendar-admin/calendar-admin.component';
import { PaginaClinicaComponent } from './pagina-clinica/pagina-clinica.component';
import { PendingShiftsComponent } from './pending-shifts/pending-shifts.component';
import { CalendarClinicaComponent } from './calendar-clinica/calendar-clinica.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { PacientesPenalizadosComponent } from './pacientes-penalizados/pacientes-penalizados.component';
import { SoporteComponent } from './soporte/soporte.component';
import { HospitalesClinicasComponent } from './hospitales-clinicas/hospitales-clinicas.component';
import { RegistroMedicoComponent } from './registro-medico/registro-medico.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: WelcomeComponent },
  { path: 'login-doctor', component: LoginDoctorComponent },
  { path: 'login-paciente', component: PatientLoginComponent },
  { path: 'login-admin', component: AdminLoginComponent },
  { path: 'login-hospital', component: HospitalLoginComponent },
  { path: 'pagina-clinica', component: PaginaClinicaComponent },
  { path: 'registro-paciente', component: RegistroPacienteComponent },
  { path: 'registro-turno', component: ShiftRecordComponent },
  { path: 'pagina-medico', component: PaginaMedicoComponent },
  { path: 'nuevo-turno', component: NuevoTurnoComponent },
  { path: 'pagina-admin', component: AdminPageComponent },
  { path: 'perfil-paciente', component: PatientProfileComponent },
  { path: 'inicio-consulta', component: InicioConsultaComponent },
  { path: 'calendario-doctor', component: CalendarDoctorComponent },
  { path: 'calendario-admin', component: CalendarAdminComponent },
  { path: 'turnos-pendientes', component: PendingShiftsComponent },
  { path: 'calendario-clinica', component: CalendarClinicaComponent },
  { path: 'pacientes-penalizados', component: PacientesPenalizadosComponent },
  {
    path: 'sobre-nosotros',
    loadComponent: () =>
      import('./sobre-nosotros/sobre-nosotros.component').then(m => m.SobreNosotrosComponent)
  },
  { path: 'soporte', component: SoporteComponent },
  { path: 'perfil-medico', component: PerfilMedicoComponent },
  { path: 'hospitales-clinicas', component: HospitalesClinicasComponent },
   { path: 'registro-medico', component: RegistroMedicoComponent}
];
