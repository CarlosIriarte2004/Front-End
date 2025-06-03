import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of, forkJoin } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';

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

export interface HistorialEntry {
  id?: string; 
  fecha: string; 
  tipo: string;
  descripcion: string;
  doctor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {
  private apiUrlPaciente = 'http://localhost:3000/api/paciente/perfil'; //direccion de info del paciente
  private apiUrlHistorial = 'http://localhost:3000/api/paciente/historial'; //direccion de historial medico

  constructor(private http: HttpClient) { }

  getPacienteInfo(): Observable<PacienteInfo> {
    const mockPaciente: PacienteInfo = {
      nombreCompleto: 'Juan Hector Perez Solis (Desde Servicio)', 
      cedulaIdentidad: '9867867',
      tipoSangre: 'ORH +',
      nacionalidad: 'Boliviana',
      telefonoFijo: '4865248',
      telefonoMovil: '(+591) 72598635',
      correoPersonal: 'HectorPeSol@gmail.com',
      fechaNacimiento: '28/08/2001',
      sexo: 'Masculino',
      estadoCivil: 'Soltero',
      lugarNacimiento: 'Cochabamba',
      direccion: 'Av. America y Santa cruz',
      numeroEmergencia: '(+591) 75864931',
      estadoPenalizacion: 'No penalizado',
      fotoUrl: '/assets/images/foto-perfil.png', 
    };
    return of(mockPaciente).pipe(
      tap(data => console.log('Datos del perfil (servicio):', data))
    );

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} falló: ${error.message}`, error);
      return of(result as T);
    };
  }
}