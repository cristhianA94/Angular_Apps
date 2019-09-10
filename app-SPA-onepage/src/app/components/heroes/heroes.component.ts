import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
//Permita manejar rutas
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  //Arreglo para guardar Heroes
  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe( idx: number ){
    //console.log(idx);
    this.router.navigate( ['/heroe', idx] )
  }

}
