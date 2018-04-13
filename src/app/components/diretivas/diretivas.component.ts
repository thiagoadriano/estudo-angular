import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  testengif:boolean = false;
  numero:number = 0;
  constructor() { }

  ngOnInit() {
  }

  tooglengif():void{
    this.testengif = !this.testengif;
  }

  incrementoSwitch():void{
    this.numero++;
  }

}
