import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { servicioCreacionDTO, servicioDTO } from './servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + 'servicios';

  public listarServicios(id: number): Observable<servicioDTO[]> {
    return this.http.get<servicioDTO[]>(`${this.apiURL}/ListarServicios/${id}`);
  }

  public servicioPorId(id: number): Observable<servicioDTO> {
    return this.http.get<servicioDTO>(`${this.apiURL}/${id}`);
  }

  public crear(servicio: servicioCreacionDTO) {
    return this.http.post(this.apiURL, servicio);
  }

  public editar(id: number, servicio: servicioCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, servicio);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
