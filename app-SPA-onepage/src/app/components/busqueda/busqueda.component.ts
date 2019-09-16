import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

//Importar para recibir parametros
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  termino: string;
  /* Piuede venir de otras clases  */
  @Input() heroes: any = {};
  @Input() index: number;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router) {

  }

  ngOnInit() {
    /* Recoje los parametros  mandados de la busqueda*/
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      //'termino' es el nombre de la variable que le dimos en el app.routes.ts
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

  verHeroe() {
    this.router.navigate(['/heroes', this.index])

  }

}
