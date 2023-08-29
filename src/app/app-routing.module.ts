import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoCandidatoComponent } from './components/alteracao-candidato/alteracao-candidato.component';
import { CandidatoComponent } from './components/candidato/candidato.component';
import { HomeComponent } from './components/home/home.component';
import { ListaCandidatosComponent } from './components/lista-candidatos/lista-candidatos.component';
import { NovoCandidatoComponent } from './components/novo-candidato/novo-candidato.component';
import { RemocaoCandidatoComponent } from './components/remocao-candidato/remocao-candidato.component';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "candidato" , component: CandidatoComponent },
  { path: "lista-candidatos", component: ListaCandidatosComponent },
  { path: "novo/candidato" , component: NovoCandidatoComponent },
  { path: "alteracao-candidato/:id", component: AlteracaoCandidatoComponent},
  { path: "remocao/candidato/:id", component: RemocaoCandidatoComponent}

  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
