import { map, switchMap, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { NovoUsuarioService } from '../novo-usuario/novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(nomeUsuario => this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map(usuarioExiste => usuarioExiste ? { usuarioExistente: true }: null),
        first()
      )
    }
  }
}
