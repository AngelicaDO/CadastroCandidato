import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CandidatoComponent } from './components/candidato/candidato.component';
import { NovoCandidatoComponent } from './components/novo-candidato/novo-candidato.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { ListaCandidatosComponent } from './components/lista-candidatos/lista-candidatos.component'
import { CandidatosService } from './services/candidatos.service';
import { SexosService } from './services/sexos.services';
import { EscolaridadeService } from './services/escolaridade.services';
import { RemocaoCandidatoComponent } from './components/remocao-candidato/remocao-candidato.component';
import { AlteracaoCandidatoComponent } from './components/alteracao-candidato/alteracao-candidato.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatoComponent,
    NovoCandidatoComponent,
    ListaCandidatosComponent,
    RemocaoCandidatoComponent,
    AlteracaoCandidatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

    CandidatosService,
    SexosService,
    EscolaridadeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
