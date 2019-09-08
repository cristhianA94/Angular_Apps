import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  nombre  = "Cristhian";
  apellido = "Apolo";
  
  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  }

  personajes: string[] = ['Kratos', 'Daynerys','Yoshi']
  
}
