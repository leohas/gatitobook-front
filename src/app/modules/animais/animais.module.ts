import { NovoAnimalComponent } from './../../components/animais/novo-animal/novo-animal.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AnimaisRoutingModule } from './animais-routing.module';
import { CartaoModule } from '../cartao/cartao.module';
import { SharedModule } from '../shared/shared.module';

import { DetalheAnimalComponent } from './../../components/animais/detalhe-animal/detalhe-animal.component';
import { ListaAnimaisComponent } from 'src/app/components/animais/lista-animais/lista-animais.component';
import { GradeFotosAnimaisComponent } from 'src/app/components/animais/grade-fotos-animais/grade-fotos-animais.component';
import { AnimalComponent } from 'src/app/components/animais/animal/animal.component';
import { ComentariosComponent } from 'src/app/components/animais/detalhe-animal/comentarios/comentarios.component';

@NgModule({
  declarations: [
    ListaAnimaisComponent,
    GradeFotosAnimaisComponent,
    AnimalComponent,
    DetalheAnimalComponent,
    ComentariosComponent,
    NovoAnimalComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    SharedModule
  ]
})
export class AnimaisModule { }
