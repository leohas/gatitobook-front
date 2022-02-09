import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodapeComponent } from 'src/app/components/componentes/rodape/rodape.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RodapeComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [RodapeComponent]
})
export class RodapeModule { }
