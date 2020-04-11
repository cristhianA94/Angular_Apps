import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuarioNuevoComponent } from './componentes/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './componentes/usuario/usuario-detalle.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: 
    
    [
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: 'detalle', component: UsuarioDetalleComponent },
      // Redirecciona a /nuevo por defecto
      { path: '**', redirectTo: 'editar', pathMatch: 'full' }
    ]
     
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
