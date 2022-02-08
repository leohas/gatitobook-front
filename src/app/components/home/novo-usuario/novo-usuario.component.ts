import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { minusculoValidator } from 'src/app/validators/minusculo.validator'
import { usuarioSenhaIguaisValidator } from 'src/app/validators/usuario-senha-iguais.validator';

import { NovoUsuario } from 'src/app/utils/types/novo-usuario/novo-usuario'

import { NovoUsuarioService } from 'src/app/services/novo-usuario/novo-usuario.service';
import { UsuarioExisteService } from 'src/app/services/usuario-existe/usuario-existe.service';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]
        ],
        password: [''],
      },
      {
        validators: [usuarioSenhaIguaisValidator]
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario
      console.log(novoUsuario)
    }
  }
}
