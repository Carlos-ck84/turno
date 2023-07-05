import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { turnoCreacionDTO, turnoDTO } from './listar-turno/turno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + 'turnos';

  public listarTurnos(id: number): Observable<turnoDTO[]> {
    return this.http.get<turnoDTO[]>(`${this.apiURL}/ListarTurnos/${id}`);
  }

  public crear(turno: turnoCreacionDTO) {
    return this.http.post(this.apiURL, turno);
  }
}
