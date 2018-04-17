import { Component, OnInit } from '@angular/core';
import { PessoasService, Pessoa } from './pessoas-service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoasService]
})
export class ListaPessoaComponent implements OnInit {
  pessoas: Array<Pessoa> = [];
  nome = '';

  constructor(public service: PessoasService) {
    this.pessoas = this.service.getPessoas();
  }

  ngOnInit() {
  }

  logger() {
    console.log(this.nome);
  }

  enviarNome() {
    this.service.setPessoa(this.nome);
  }

}
