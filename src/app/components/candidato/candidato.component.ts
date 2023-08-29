import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})

export class CandidatoComponent  {


  constructor ( private router: Router) {}



 
  // funçao botao novo candidato
  novoCandidato(): void {
    this.router.navigate(['novo/candidato'])
  }



  
}
