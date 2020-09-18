import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // TODO Interceptor
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      // Para que este pendiente siempre de todas las peticiones
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
