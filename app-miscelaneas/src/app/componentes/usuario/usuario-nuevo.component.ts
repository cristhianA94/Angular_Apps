import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ],
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    // Parent trae los parametros de la ruta padre
    this.router.parent.params.subscribe(parametros => {
      console.log("Ruta hija Usuario nuevo")
      console.log(parametros)
    })
  }

  ngOnInit(): void {
  }

}
