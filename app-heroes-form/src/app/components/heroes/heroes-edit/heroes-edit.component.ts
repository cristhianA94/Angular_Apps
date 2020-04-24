import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Heroe } from '../../../models/heroe';


class Heroe2 {
  constructor(public nombre: string, public casa: string, public biografia: string) { }
}

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styles: [
    `
    .example-form {
      min-width: 150px;
      width: 100%;
    }

    .buttons-form {
      width: 100%;
      
    }
    `
  ]
})
export class HeroesEditComponent implements OnInit {

  heroeForm: FormGroup;

  // Interface
  heroe: Heroe;
  heroes: Heroe[] = [];
  // Class
  heroe2: Heroe2;
  heroes2: Heroe2[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(): void {
    this.heroeForm = this.fb.group({
      nombre: ['', Validators.required],
      casa: ['', Validators.required],
      biografia: ['', Validators.required]
    });
  }

  guardar() {

    //                      Interfaces
    this.heroe = {
      nombre: this.heroeForm.value.nombre,
      casa: this.heroeForm.value.casa,
      biografia: this.heroeForm.value.biografia
    };

    console.log('Interface');
    console.log('Heroe =>', this.heroe);


    //                      Clases
    this.heroe2 = new Heroe2(
      this.heroeForm.value.nombre,
      this.heroeForm.value.casa,
      this.heroeForm.value.biografia
    );

    this.heroes2.push(this.heroe2)
    /* this.heroes2 = [new Heroe2(
      this.heroeForm.value.nombre,
      this.heroeForm.value.casa,
      this.heroeForm.value.biografia)
    ]; */

    console.log('Class');
    console.log('Heroes[]=>', this.heroes2);

    // Resetea los valores del form
    this.heroeForm.reset();
    this.router.navigateByUrl('/heroes')

  }

}
