import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ruta } from '../models/ruta';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
    }

  private log(message: string) {
      alert(`Mensaje: ${message}`);
  }

  addRuta (ruta: Ruta): Observable<Ruta> {
    return this.http.post<Ruta>(this.baseUrl+'api/Ruta', ruta, httpOptions).pipe(
    tap((newRuta: Ruta) => this.log(`Agregada nuevo cliente con id:${newRuta.id}`)),
    catchError(this.handleError<Ruta>('addRuta'))
    );
  }

  getAll():Observable<Ruta[]>{
    return this.http.get<Ruta[]>(this.baseUrl+'api/Ruta').pipe(
        catchError(this.handleError<Ruta[]>('Consulta  Rutas',[]))
    );
  }
}
