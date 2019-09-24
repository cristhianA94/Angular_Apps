import { Pipe, PipeTransform } from '@angular/core';

/* Analizador y validador de urls */
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){ }

  transform(value: string, url: string): any {
    /* Asegura el url dado */
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
