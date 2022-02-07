import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../../components/home/home-routing.module';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';

import { LoginComponent } from '../../components/home/login/login.component'
import { HomeComponent } from '../../components/home/home.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
