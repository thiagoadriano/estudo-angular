import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Input() menu: Array<string> = [];
  @Output() itemClicado = new EventEmitter();
  habilitarBotao = false;
  itens: Array<string> = [];
  inputItem = '';
  idade: number = undefined;


  constructor() { }

  ngOnInit() {
  }

  logClick(event) {
    console.log(event);
  }

  metodoKey(event) {
    console.log(event);
  }

  validaSenha(value) {
    if (value.length > 5) {
      this.habilitarBotao = true;
    } else {
      this.habilitarBotao = false;
    }
  }

  enviarSenha(value) {
    alert(value);
  }

  enviarItem() {
    if (this.inputItem) {
      this.itens.push(this.inputItem);
      this.inputItem = '';
    }
  }

  removeItem(item: string) {
    this.itens.splice(this.itens.indexOf(item), 1);
  }

  enviaIdade(nascimento) {
    const data = new Date(),
          splitData = nascimento.split('-'),
          ano = splitData[0];
    this.idade = data.getFullYear() - ano;
  }

  enviarNome(item) {
    this.itemClicado.emit(item);
  }

}
