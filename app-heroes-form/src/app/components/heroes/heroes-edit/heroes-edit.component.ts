import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroe';


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
  heroe: Heroe;

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

    // Setea los datos del formulacio al objeto Heroe
    this.heroe = {
      nombre: this.heroeForm.value.nombre,
      casa: this.heroeForm.value.casa,
      biografia: this.heroeForm.value.biografia
    };
    console.log(this.heroe);
    this.router.navigateByUrl('/heroes')

  }

}
