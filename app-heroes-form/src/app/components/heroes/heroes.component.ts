import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
    `
    .example-button-container {
      display: flex;
      justify-content: center;
      width: 120px;
    }
    `
  ]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
