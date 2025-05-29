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

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' }, 

  {
    path: 'bienvenida',
    component: WelcomeComponent
  },
  {
    path: 'login-doctor',
    component: LoginDoctorComponent
  },
  {
    path: 'login-paciente',
    component: PatientLoginComponent
  },
  {
    path: 'login-admin',
    component: AdminLoginComponent
  },
  {
    path: 'login-hospital',
    component: HospitalLoginComponent
  },
  {
    path: 'pagina-clinica',
    component: PaginaClinicaComponent
  },
  {
    path: 'registro-paciente',
    component: RegistroPacienteComponent
  },
  {
    path: 'registro-turno',
    component: ShiftRecordComponent
  },
  {
    path: 'pagina-medico',
    component: PaginaMedicoComponent
  },
  {
    path: 'nuevo-turno', 
    component: NuevoTurnoComponent
  },
  {
    path: 'pagina-admin',
    component: AdminPageComponent
  },
  {
    path: 'perfil-paciente',
    component: PatientProfileComponent
  },
  {
    path: 'inicio-consulta',
    component: InicioConsultaComponent
  },
  {
    path: 'calendario-doctor',
    component: CalendarDoctorComponent
  },
   {
    path: 'calendario-admin',
    component: CalendarAdminComponent
  },
];
