import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {
    nomes:Array<string> = ['João', 'Maria', 'Alberto', 'Roberto'];
    constructor() { }

    getPessoas():Array<string>{
        return this.nomes;
    }

    setPessoa(pessoa:string = ''):void{
        if(pessoa && typeof pessoa === 'string') {
            this.nomes.push(pessoa);
        }
    }
}