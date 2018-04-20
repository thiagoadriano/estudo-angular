import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  testengif:boolean = false;
  numero:number = 0;
  valorClassBinding:boolean = true;
  tamanho:number = 14;
  valorFonte:string = this.tamanho + 'px';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.valorClassBinding = false;
    }, 2000);
  }

  tooglengif():void{
    this.testengif = !this.testengif;
  }

  incrementoSwitch():void{
    this.numero++;
  }

  aumenta() {
    this.tamanho += 2;
    this.valorFonte = this.tamanho + 'px';
  }

}
