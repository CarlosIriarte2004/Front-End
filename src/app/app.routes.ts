import { Routes } from '@angular/router';

import { PatientLoginComponent } from './patient-login/patient-login.component'; 
import { AdminLoginComponent } from './admin-login/admin-login.component'; 
import { HospitalLoginComponent} from './hospital-login/hospital-login.component';
import { ShiftRecordComponent } from './shift-record/shift-record.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { LoginDoctorComponent} from './login-doctor/login-doctor.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';

export const routes: Routes = [

  {
    path: 'login-admin',    
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

  {
    path: 'bienvenida', 
    component: WelcomeComponent
  },

  {
    path: 'perfil-paciente', 
    component: PatientProfileComponent
  },

  {
    path: '', 
    redirectTo: '/bienvenida', 
    pathMatch: 'full' 
  },
  {
    path: 'login-doctor', 
    component: LoginDoctorComponent 
  },
   {
    path: 'login-paciente', 
    component: PatientLoginComponent
  },
  { path: 'registro-paciente', 
    component: RegistroPacienteComponent 
  },
  { path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  }, 

];