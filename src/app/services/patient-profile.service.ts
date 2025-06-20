import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of, forkJoin } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { NonNullableFormBuilder } from '@angular/forms';

export interface PacienteInfo {
  nombreCompleto: string;
  cedulaIdentidad: string;
  tipoSangre?: string; 
  nacionalidad?: string;
  telefonoFijo?: string;
  telefonoMovil: string;
  correoPersonal: string;
  fechaNacimiento: string; 
  sexo: string;
  estadoCivil?: string;
  lugarNacimiento?: string;
  direccion?: string;
  numeroEmergencia?: string;
  estadoPenalizacion?: string;
  fotoUrl?: string;
}
interface DecodedToken {
  newPaciente: {
    id: string;
    ci: number;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    contrasenia: string;
    fechaNac: string;
    penalizado: boolean;
    estadoCivil: string;
    direccion: string;
    tipoSangre: string;
    telefono: number;
    lugarNac: string;
    genero: string;
    
    // Add any other fields if present in token
  };
  iat?: number;
  exp?: number;
}

interface newDecodedToken{
  fresh: false,
  iat: number,
  jti: string,
  type: string,
  sub: {
    id: string,
    ci: number,
    nombre: string,
    apellido: string,
    estadoCivil: string,
    direccion: string,
    correoElectronico: string,
    tipoSangre: string,
    telefono: number,
    lugarNac: string,
    genero: string,
    fechaNac: string
  },
  nbf: number,
  csrf: string,
  exp: number
}


export interface HistorialEntry {
  id?: string; 
  fecha: string; 
  tipo: string;
  descripcion: string;
  doctor?: string;
}
export interface NombrePaciente {
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {
  private apiUrlPaciente = 'http://localhost:3000/api/paciente/perfil'; //direccion de info del paciente
  private apiUrlHistorial = 'http://localhost:3000/api/paciente/historial'; //direccion de historial medico

  constructor(private http: HttpClient) { }

  getPacienteInfo(): Observable<PacienteInfo> {
  if (typeof window === 'undefined') {
    console.warn('Not in browser — no localStorage available');
    return throwError(() => new Error('Not in browser'));
  }

  const token = localStorage.getItem('token');

  if (!token || token.split('.').length !== 3) {
    console.error('Invalid or missing token:', token);
    return throwError(() => new Error('Token is missing or malformed'));
  }

  try {
    const decoded: newDecodedToken = jwtDecode(token);
    const paciente = decoded.sub;

    const mockPaciente: PacienteInfo = {
      nombreCompleto: `${paciente.nombre} ${paciente.apellido}`,
      cedulaIdentidad: paciente.ci.toString(),
      tipoSangre: paciente.tipoSangre,
      nacionalidad: 'Boliviana',
      telefonoFijo: '',
      telefonoMovil: paciente.telefono.toString(),
      correoPersonal: paciente.correoElectronico,
      fechaNacimiento: paciente.fechaNac,
      sexo: paciente.genero,
      estadoCivil: paciente.estadoCivil,
      lugarNacimiento: paciente.lugarNac,
      direccion: paciente.direccion,
      numeroEmergencia: '',
      estadoPenalizacion: 'No penalizado',
      fotoUrl: '/assets/images/foto-perfil.png',
    };

    return of(mockPaciente);
  } catch (err) {
    console.error('Error decoding token:', err);
    return throwError(() => new Error('JWT decoding failed'));
  }
}

  getHistorialMedico(): Observable<HistorialEntry[]> {
    const mockHistorial: HistorialEntry[] = [
      { id: 'h1', fecha: '2024-05-10', tipo: 'Consulta General (Servicio)', descripcion: 'Chequeo de rutina, presión arterial normal.', doctor: 'Dr. Alan Poe' },
      { id: 'h2', fecha: '2024-03-15', tipo: 'Examen de Sangre (Servicio)', descripcion: 'Resultados dentro de los rangos normales.', doctor: 'Laboratorio clínico' },
      { id: 'h3', fecha: '2023-11-02', tipo: 'Vacunación (Servicio)', descripcion: 'Vacuna contra la influenza.', doctor: 'Enf. María Sol' },
    ];
    return of(mockHistorial).pipe(
      tap(data => console.log('Historial médico (servicio):', data))
    );

  }

  getProfileAndHistoryData(): Observable<{ paciente: PacienteInfo, historial: HistorialEntry[] }> {
    return forkJoin({
      paciente: this.getPacienteInfo(),
      historial: this.getHistorialMedico()
    });
  }
  
  getPacienteName(): Observable<string>{
    const token = localStorage.getItem('token');

  if (!token || token.split('.').length !== 3) {
    console.error('Invalid or missing token:', token);
    return throwError(() => new Error('Token is missing or malformed'));
  }

  try {
    const decoded: newDecodedToken = jwtDecode(token);
    const paciente = decoded.sub;

    return of(paciente.nombre);
    } catch (err) {
    console.error('Error decoding token:', err);
    return throwError(() => new Error('JWT decoding failed'));
  }
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} falló: ${error.message}`, error);
      return of(result as T);
    };
  }
}