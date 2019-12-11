import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

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

  addCliente (cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl+'api/Cliente', cliente, httpOptions).pipe(
    tap((newCliente: Cliente) => this.log(`Agregada nuevo cliente con id:${newCliente.identificacion}`)),
    catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl+'api/Cliente').pipe(
        catchError(this.handleError<Cliente[]>('Consulta  Clientes',[]))
    );
  }
}
