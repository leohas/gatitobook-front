import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioService } from 'src/app/services/autenticacao/usuario/usuario.service';

import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.usuarioService.estaLogado()) {
      this.router.navigateByUrl('animais')
      return false
    }
    return true
  }
}
