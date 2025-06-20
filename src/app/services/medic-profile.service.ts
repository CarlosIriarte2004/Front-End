import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of, forkJoin } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MedicoProfile } from '../perfil-medico/perfil-medico.component';
import { jwtDecode } from 'jwt-decode';


interface DecodedToken {
  newMedico: {id: string,
  ci: number,
  nombre: string,
  apellido: string,
  correo: string,
  genero: string,
  fechaNac: string,
  direccion: string,
  telefono: number,
  tipoSangre: string,
  estadoCivil: string,
  lugarNac: string,
  clinica: {
    id: string,
    nombre: string,
    direccion: string
  },
  especialidad: {
    id: string,
    nombre: string
  },
  iat?: number;
  exp?: number;
}}

@Injectable({
  providedIn: 'root'
})
export class MedicProfileService {

  constructor(private http: HttpClient) { }

  getMedicoInfo(): Observable<MedicoProfile> {
  if (typeof window === 'undefined') {
    console.warn('Not in browser — no localStorage available');
    return throwError(() => new Error('Not in browser'));
  }

  const token = localStorage.getItem('token');
  console.log(token)

  if (!token || token.split('.').length !== 3) {
    console.error('Invalid or missing token:', token);
    return throwError(() => new Error('Token is missing or malformed'));
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const medico = decoded.newMedico;
    
if (medico && medico.nombre) {
  console.log(medico.nombre);
} else {
  console.warn('Token no contiene datos de médico o no está presente:', medico);
}

    const mockMedico: MedicoProfile = {
      fotoUrl: 'assets/images/doctor-sin-fondo.png',
    nombreCompleto: `${medico.nombre} ${medico.apellido}`,
    fechaNacimiento: medico.fechaNac,
    cedulaIdentidad: medico.ci.toString(),
    Especialidad: medico.especialidad?.nombre ??'NO ASIGNADO',
    sexo: medico.genero,
    tipoSangre: medico.tipoSangre,
    estadoCivil: medico.estadoCivil,
    nacionalidad: 'Boliviana',
    lugarNacimiento: medico.lugarNac,
    direccion: medico.direccion,
    telefonoMovil: medico.telefono.toString(),
    numeroEmergencia: '(+591) 72340129',
    trabajaEn: medico.clinica?.nombre??'NO ASIGNADO'
    };

    return of(mockMedico);
  } catch (err) {
    console.error('Error decoding token:', err);
    return throwError(() => new Error('JWT decoding failed'));
  }
}
}

