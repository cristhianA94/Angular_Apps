import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h3>ngStyle</h3>
    <p [style.fontSize]="'25px'">
    Holaa mundo  [style.fontSize]="'25px'"
    </p>
    <p [style.fontSize.px]="tamanioLetra">
    Holaa mundo 4 [style.fontSize.px]="tamanioLetra"
    </p>

    <button class="btn btn-primary" (click)="tamanioLetra = tamanioLetra + 5">A
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamanioLetra = tamanioLetra - 5">A
      <i class="fa fa-minus"></i>
    </button>
    
  `,
  styles: [
  ],
})
export class NgStyleComponent implements OnInit {

  tamanioLetra: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
