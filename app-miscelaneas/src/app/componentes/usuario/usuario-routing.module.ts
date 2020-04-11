import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

const usuariosRoutes: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    // Redirecciona a /nuevo por defecto
    { path: '**', redirectTo: 'editar', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuariosRoutesModule { }
