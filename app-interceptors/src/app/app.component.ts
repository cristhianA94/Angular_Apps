import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-interceptors';

  constructor(public _usuarioService: UsuarioService) {
    this._usuarioService.obtenerUsuario().subscribe((res)=>{
      console.log(res);

    });
  }
}
