import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { comercioCreacionDTO, comercioDTO } from './comercio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComercioService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + 'comercios';

  public listaComercios(): Observable<comercioDTO[]> {
    return this.http.get<comercioDTO[]>(this.apiURL);
  }

  public comercioPorId(id: number): Observable<comercioDTO> {
    return this.http.get<comercioDTO>(`${this.apiURL}/${id}`);
  }

  public crear(comercio: comercioCreacionDTO) {
    return this.http.post(this.apiURL, comercio);
  }

  public editar(id: number, comercio: comercioCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, comercio);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
