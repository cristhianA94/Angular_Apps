import { Component} from '@angular/core';

//Importar para recibir parametros
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    /* Recoje los parametros  mandados*/
    this.activatedRoute.params.subscribe( params => {
      //id es el nombre de la variable que le dimos en el app.routes.ts
      //console.log( params['id'] );
      this.heroe = this._heroesService.getHeroe( params['id'] );
       console.log(this.heroe);
    })
  }

}
