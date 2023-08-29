import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remocao-candidato',
  templateUrl: './remocao-candidato.component.html',
  styleUrls: ['./remocao-candidato.component.css']
})
export class RemocaoCandidatoComponent  implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CandidatoService: CandidatosService ) {}


    candidato!: Candidato;
    id!: string;

   ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.CandidatoService.getCandidato(parseInt(this.id)).subscribe(
     (res) => (this.candidato = res)
    );
   }

  fechar() : void {
    this.router.navigate(['/lista-candidatos']);
  }

  remover() : void {
    this.CandidatoService.deleteCandidato(parseInt(this.id)).subscribe(() =>
      this.fechar()
    );
  }





}
