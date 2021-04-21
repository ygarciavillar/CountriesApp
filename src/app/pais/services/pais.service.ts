import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interface/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _API: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  buscarPais(query: string, busqueda: string): Observable<Pais[]> {
    const url = `${this._API}/${query}/${busqueda}`
    return this.http.get<Pais[]>(url)
  }

  buscarCode(codigo: string): Observable<Pais>{
    const url = `${this._API}/alpha/${codigo}`
    return this.http.get<Pais>(url)  
  }
}
