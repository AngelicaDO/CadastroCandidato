import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from 'src/app/services/candidatos.service';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css']
})
export class ListaCandidatosComponent implements OnInit {


 candidato: Candidato[] = [];

constructor( private candidatoService: CandidatosService) {
  
}


//lista os candidatos na tabela
ngOnInit(): void {
  this.candidatoService.getCandidatos().subscribe(resposta => this.candidato = resposta)
 console.log(this.candidato);
}



















}
