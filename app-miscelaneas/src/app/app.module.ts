import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResaltadoDirective } from './directives/resaltado.directive';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { NgClasesComponent } from './componentes/ng-clases/ng-clases.component';
import { NgSwitchComponent } from './componentes/ng-switch/ng-switch.component';
import { HomeComponent } from './componentes/home/home.component';

import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuarioNuevoComponent } from './componentes/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './componentes/usuario/usuario-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
