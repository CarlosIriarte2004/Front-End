import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

   private apiUrl = 'http://localhost:3000/clinica';

  constructor(private http: HttpClient) {}

  
  loginClinica(correoElectronico: string, contrasenia: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correoElectronico, contrasenia });
  }
}
