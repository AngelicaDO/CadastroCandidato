import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alteracao-candidato',
  templateUrl: './alteracao-candidato.component.html',
  styleUrls: ['./alteracao-candidato.component.css']
})
export class AlteracaoCandidatoComponent  implements OnInit{
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CandidatoService: CandidatosService
  ){}



  candidato!: Candidato;
  id!: string;

   ngOnInit() : void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.CandidatoService.getCandidato(parseInt(this.id)).subscribe(
      (res) => (this.candidato = res)
     );
   }

  fechar(): void {
    this.router.navigate(["/lista-candidatos"]);
  }
  alterar(candidato: Candidato): void{
    this.CandidatoService.putCandidato(candidato, parseInt(this.id)).subscribe(
      () => this.fechar())
  }

}
