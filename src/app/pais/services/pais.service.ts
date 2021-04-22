import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interface/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _API: string = 'https://restcountries.eu/rest/v2'
  private _filter: string = 'name;capital;flag;population;alpha2Code'

  constructor(private http: HttpClient) { }

  buscarPais(query: string, busqueda: string): Observable<Pais[]> {

    const params = new HttpParams().set('fields', this._filter )

    const url = `${this._API}/${query}/${busqueda}`
    return this.http.get<Pais[]>(url, {params})
  }

  buscarCode(codigo: string): Observable<Pais>{
    const url = `${this._API}/alpha/${codigo}?fileds=${this._filter}`
    return this.http.get<Pais>(url)  
  }
}
