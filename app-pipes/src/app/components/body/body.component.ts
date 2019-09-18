import { Component } from '@angular/core';
import { reject } from 'q';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  
  anio = new Date().getFullYear();

  texto = "Texto de prueba";

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera C",
      casa: "19"
    }
  }

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('LLego la data!'), 1500)
  })

  fecha = new Date();

  text2 = "CriSthIan AnDrÉs ApOlO CeVaLlos";

  video = "0G383538qzQ";

  activar: boolean = true;

}

