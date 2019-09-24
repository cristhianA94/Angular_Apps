import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Necesario para hacer un REST de un API
import { HttpClientModule } from '@angular/common/http';
//Servicio donde se va a guardar los datos del API
import { UserService } from './services/user.service';


import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
