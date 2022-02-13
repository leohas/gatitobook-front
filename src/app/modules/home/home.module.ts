import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../../components/home/home-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from 'src/app/components/home/login/login.component'
import { HomeComponent } from 'src/app/components/home/home.component';
import { NovoUsuarioComponent } from 'src/app/components/home/novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
