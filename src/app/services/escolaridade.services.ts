import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Escolaridades } from "../interfaces/escolaridades";


@Injectable (
    {
        providedIn: 'root'
    }
)

export class EscolaridadeService {

    constructor(private http: HttpClient) {}

    
getEscolaridade(): Escolaridades[] {

    return[

        { id: 1, descricao: "Ensino fundamental completo" },
        { id: 2, descricao: "Ensino fundamental imcompleto" },
        { id: 3, descricao: "Ensino medio completo" },
        { id: 4, descricao: "Ensino medio imcompleto" },
        { id: 5, descricao: "Ensino superior imcompleto" },
        { id: 6, descricao: "Ensino superior completo" },
        { id: 7, descricao: "Pós Graduação" },
        { id: 8, descricao: "Mestrado" },
        { id: 9, descricao: "Doutorado" },

    ]
}


}

