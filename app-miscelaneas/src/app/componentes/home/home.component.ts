import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <hr>
    <app-ng-clases></app-ng-clases>
    <hr>
    <h3>Directiva</h3>
    <p [appResaltado]="'red'">
        Hola mundo 2
    </p>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ],
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("Constructor");

  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("OnDestroy");
  }

}
