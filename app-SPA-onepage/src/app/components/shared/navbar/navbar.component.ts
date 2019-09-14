import { Component, OnInit } from '@angular/core';

//Permita manejar rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    console.log(termino);
    this.router.navigate(['/buscar', termino]);

  }
}
