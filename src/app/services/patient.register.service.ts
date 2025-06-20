import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PatientRegisterService {
  private apiUrl = 'http://127.0.0.1:5000/pacientes';

  constructor(private http: HttpClient) {}

  crearPaciente(paciente: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, paciente, { headers });
  }

  loginPaciente(correoElectronico: string, contrasenia: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correoElectronico, contrasenia });
  }
}


