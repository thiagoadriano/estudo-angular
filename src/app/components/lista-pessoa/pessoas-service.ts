import { Injectable } from '@angular/core';

export interface Pessoa {
  id: number;
  nome: string;
}

@Injectable()
export class PessoasService {
    nomes: Array<Pessoa> = [
      {id: 0, nome: 'João'},
      {id: 1, nome: 'Maria'},
      {id: 2, nome: 'Alberto'},
      {id: 3, nome: 'Roberto'}
    ];
    constructor() { }

    getPessoas(): Array<Pessoa> {
        return this.nomes;
    }

    myTrack(index: number, pessoa: Pessoa): number {
      return pessoa.id;
    }

    setPessoa(pessoa: string = ''): void {
      const lestItem: Pessoa = this.nomes[this.nomes.length - 1];
      let lastId: number = lestItem.id;
      const id: number = lastId++;
      this.nomes.push({
        id: id,
        nome: pessoa
      });
    }
}
