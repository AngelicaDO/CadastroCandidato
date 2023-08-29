import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { Sexos } from 'src/app/interfaces/sexos';
import { SexosService } from 'src/app/services/sexos.services';
import { Escolaridades } from 'src/app/interfaces/escolaridades';
import { EscolaridadeService } from 'src/app/services/escolaridade.services';


@Component({
  selector: 'app-novo-candidato',
  templateUrl: './novo-candidato.component.html',
  styleUrls: ['./novo-candidato.component.css']
})
export class NovoCandidatoComponent implements OnInit {

constructor(private router: Router, private candidatoService: CandidatosService, private sexoService: SexosService, private escolaridadeService: EscolaridadeService) {}




ngOnInit(): void {
this.candidato = { idEscolaridade: 0 ,  idSexo: 0 ,nome:'',cpf:'',dataNascimento:'',telefone:'',email:'',logradouro:'',numero:'',cep:'', cidade: '', uf:'' };
this.listarSexos();
this.listarEscolaridade();
}

candidato!: Candidato;


  // //criar um objeto do tipo candidato
  // private _candidato!: Candidato;
  // public get candidato(): Candidato {
  //   return this._candidato;
  // }
  // public set candidato(value: Candidato) {
  //   this._candidato = value;
  // }

  



    
  //para listar os sexos 
  sexos!: Sexos[];

  listarSexos() : void {
    this.sexos = this.sexoService.getSexos();
  }




  //para listar escolaridade
  escolaridades!: Escolaridades[];
  
  listarEscolaridade() : void {
    this.escolaridades = this.escolaridadeService.getEscolaridade();
  }




     //funçao voltar
     voltar(): void {
      this.router.navigate(['/lista-candidatos']);
      } 



  

    //funçao incluir novo candidato
  incluir(candidato: Candidato) : void {
     this.candidatoService.postCandidato(candidato).subscribe(() => this.router.navigate(['/lista-candidatos']));
  }







    
}
