import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagemComponent } from 'src/app/components/componentes/mensagem/mensagem.component';

@NgModule({
  declarations: [MensagemComponent],
  imports: [
    CommonModule
  ],
  exports: [MensagemComponent]
})
export class MensagemModule { }
