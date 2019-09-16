// Input, Output, EventEmitter son para heredar variables y metodos
// de clases Padre-hijo, Hijo-padre
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  /* Piuede venir de otras clases  */
  @Input() heroes: any = {};
  @Input() index: number;

  //El evento tiene que retornar un tipo de valor, en este caso el index, (number)
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    //Inicializa el evento
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    // Busca en una clase padre
    this.router.navigate(['/heroe', this.index]);
    //Evento escuchado por el padre
    // this.heroeSeleccionado.emit(this.index);
  }

}
