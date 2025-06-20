import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MedicRegisterService {
    private apiUrl = 'http://localhost:3000/medico';

    constructor(private http: HttpClient) {}

    crearMedico(medico: any): Observable<any> {
    return this.http.post(this.apiUrl, medico);
  }
    loginMedico(correoElectronico: string, contrasenia: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correoElectronico, contrasenia });
  }
   todosMedicos():Observable<any>{
    return this.http.get(`${this.apiUrl}/frontendLista`)
   }

}
