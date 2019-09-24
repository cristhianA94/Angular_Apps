import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Vamos a usar el API gratuito de pruebas:https://randomuser.me/api/


  constructor(protected http: HttpClient) { }

  getUser(){
    return this.http.get('https://randomuser.me/api/?results=20')
  }

}
