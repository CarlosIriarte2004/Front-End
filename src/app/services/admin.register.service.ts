import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AdminRegisterService {
    private apiUrl = 'http://localhost:3000/administrador';

    constructor(private http: HttpClient) {}

    crearAdmin(medico: any): Observable<any> {
    return this.http.post(this.apiUrl, medico);
  }
    loginAdmin(correoElectronico: string, contrasenia: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correoElectronico, contrasenia });
  }
}