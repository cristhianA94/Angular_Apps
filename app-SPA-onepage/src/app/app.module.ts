import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Componentes */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

/* Rutas */
import { AppRoutesModule } from './app.routes.module';

/* Servicios */
import { HeroesService } from './services/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
