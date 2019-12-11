import { Injectable, Inject } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { TiqueteRequest } from '../models/tiquete-request';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TiqueteView } from '../models/tiquete-view';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TiqueteService {

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

  addTiquete(tiquete: TiqueteRequest): Observable<TiqueteRequest>{
    return this.http.post<TiqueteRequest>(this.baseUrl+'api/Tiquete', tiquete, httpOptions).pipe(
      tap((newTiquete:TiqueteRequest)=> this.log(`Registrado el tiquete  con Id: ${newTiquete.id}`)),
      catchError(this.handleError<TiqueteRequest>('Registrar Tiquete'))
    );
  }

  getAll():Observable<TiqueteView[]>{
    return this.http.get<TiqueteView[]>(this.baseUrl+'api/Tiquete').pipe(
      catchError(this.handleError<TiqueteView[]>('Consulta tiquetes', []))
    );
   }
}
