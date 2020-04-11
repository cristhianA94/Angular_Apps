import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-clases',
  templateUrl: './ng-clases.component.html',
})
export class NgClasesComponent implements OnInit {


  alerta: string = "alert-danger"

  loading: boolean = false

  propiedades: Object = {
    danger: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading = true

    // Despues de 3 seg cambiara
    setTimeout(() => this.loading = false, 3000 )
  }

}
