import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidato } from '../interfaces/candidato';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient ) { }

  baseurl: string = "http://localhost:5175/api/candidato";


  //listar
  public getCandidatos() : Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.baseurl);
  }

  public getCandidato(id: number): Observable<Candidato>{
    const url = `${this.baseurl}/{id}`;
    return this.http.get<Candidato>(url)
  }

  //incluir
  public postCandidato(candidato: Candidato) : Observable<Candidato> {
    return this.http.post<Candidato>(this.baseurl, candidato);
  }


  public putCandidato(candidato: Candidato, id: number) : Observable<Candidato>{
    const url = `${this.baseurl}/${id}`;
    return this,this.http.put<Candidato>(url, candidato);
  }

  //remover
  public deleteCandidato(id: number) : Observable<Candidato> {
    const url= `${this.baseurl}/${id}`;
    return this.http.delete<Candidato>(url);
  }



  




  











}





