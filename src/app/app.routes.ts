import { Routes } from '@angular/router';
import { PatientLoginComponent } from './patient-login/patient-login.component'; 
import { AdminLoginComponent } from './admin-login/admin-login.component'; 
import { HospitalLoginComponent} from './hospital-login/hospital-login.component';
import { ShiftRecordComponent } from './shift-record/shift-record.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
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
    path: 'registro-turno', 
    component: ShiftRecordComponent
  },

  {
    path: 'bienvenida', 
    component: WelcomeComponent
  },

  {
    path: '', 
    redirectTo: '/bienvenida', 
    pathMatch: 'full' 
  },

];