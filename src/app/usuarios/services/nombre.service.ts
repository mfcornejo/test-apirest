import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class NombreService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  buscarNombre(termino: string): Observable<User[]>{
  const url= `${this.apiUrl}/?name_like=${termino}`;
    return this.http.get<User[]>(url);

  }


}
