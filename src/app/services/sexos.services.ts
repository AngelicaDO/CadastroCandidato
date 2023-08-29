
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Sexos } from "../interfaces/sexos";



@Injectable (
    {
        providedIn: 'root'
    }
)





export class SexosService {

    constructor(private http: HttpClient) {}


    //lista fixa
     getSexos() : Sexos[] {

        return[

            { id: 1, descricao: "Maculino" },
            { id: 2, descricao: "Feminino" },
            { id: 3, descricao: "Indefinido" },
            { id: 4, descricao: "outros" }

        ];
    }









   






    


}
