import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './modules/cabecalho/cabecalho.module';

import { AppComponent } from './app.component';
import { RodapeModule } from './modules/rodape/rodape.module';
import { AnimalComponent } from './components/animais/animal/animal.component';
import { CartaoComponent } from './components/cartao/cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
