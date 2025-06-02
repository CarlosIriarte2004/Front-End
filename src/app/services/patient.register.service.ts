import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PatientRegisterService {
  private apiUrl = 'http://localhost:3000/paciente';

  constructor(private http: HttpClient) {}

  crearPaciente(paciente: any): Observable<any> {
    return this.http.post(this.apiUrl, paciente);
  }
}

