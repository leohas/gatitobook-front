import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheAnimalComponent } from 'src/app/components/animais/detalhe-animal/detalhe-animal.component';
import { ListaAnimaisComponent } from 'src/app/components/animais/lista-animais/lista-animais.component';
import { NovoAnimalComponent } from 'src/app/components/animais/novo-animal/novo-animal.component';

import { ListaAnimaisResolver } from 'src/app/resolvers/lista-animais.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver
    }
  },
  {
    path: 'novo',
    component: NovoAnimalComponent
  },
  {
    path: ':animalId',
    component: DetalheAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
