import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  contato: Contatos = new Contatos('', '', '');
  constructor() { }

  ngOnInit() {
  }

  enviarDados(form) {
    if (form.valid) {
      this.contato.salvar();
      alert(`Seu nome é ${this.contato.nome}\nSeu telefone é ${this.contato.telefone}\nSeu email é ${this.contato.email}`);
      console.table(this.contato.getAll());
      this.contato = new Contatos('', '', '');
    }
  }

}
