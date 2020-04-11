import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
  }

  // Variable que viene de fuera
  @Input("appResaltado") nuevoColor: string;

  // Evento cuando pase el mouse por encima de la directiva
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow')
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
