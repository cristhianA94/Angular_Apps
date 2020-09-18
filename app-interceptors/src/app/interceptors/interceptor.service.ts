import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //console.log("Paso por el interceptor");

    // Adjunta header
    const headers = new HttpHeaders({
      'token-usuario': 'ASDSAFSF@312312312312#!@'
    });

    // Clona la req para que se pueda reutilizar
    const reqClone = req.clone({
      headers
    });

    // Deja pasar cualquiera solicitud
    return next.handle(reqClone).pipe(
      // Captura cualquier error
      catchError(this.handleError)
    );
  }

    /* Handle API errors */
    handleError(error: HttpErrorResponse) {

      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('Ocurrio un error:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.warn(`Backend code ${error.status}`);
      }
      // return an observable with a user-facing error message
      return throwError('Algo malo sucedió; por favor, inténtelo de nuevo o más tarde..');
    };


}
