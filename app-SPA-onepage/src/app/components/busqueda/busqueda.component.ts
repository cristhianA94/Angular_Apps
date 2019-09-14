import { Component, OnInit } from '@angular/core';

//Importar para recibir parametros
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = []
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {

  }

  ngOnInit() {
    /* Recoje los parametros  mandados de la busqueda*/
    this.activatedRoute.params.subscribe(params => {
      //'termino' es el nombre de la variable que le dimos en el app.routes.ts
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes );
    })
  }



}
