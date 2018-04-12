import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {
    constructor() { }

    getPessoas():Array<string>{
        return ['João', 'Maria', 'Alberto', 'Roberto'];
    }
}