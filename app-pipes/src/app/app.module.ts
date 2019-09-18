import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* Componentes */
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Pipe Fecha Español */
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

/* pipe personalizado */
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  //Data Time pipe
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
