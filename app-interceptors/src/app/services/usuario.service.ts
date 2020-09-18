import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
  ) { }


  obtenerUsuario() {
    // Añadre parametro page
    let params = new HttpParams().append('page', '2');
    // Añadre parametro nombre
    params = params.append('nombre', 'Cristhian Apolo');

    return this.http.get(`https://reqress.in/api/users`, { params }).pipe(
      map((res: any) => res.data)
    );
  }


}

