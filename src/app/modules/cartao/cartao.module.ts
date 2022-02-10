import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoComponent } from 'src/app/components/cartao/cartao.component';

@NgModule({
  declarations: [CartaoComponent],
  imports: [
    CommonModule
  ],
  exports:[CartaoComponent]
})
export class CartaoModule { }
