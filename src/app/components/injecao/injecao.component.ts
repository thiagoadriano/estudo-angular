import { Component, OnInit } from '@angular/core';
import { NomeTecService } from './nome-tec.service';
import { MeuLogService } from './meu-log.service';

@Component({
  selector: 'app-injecao',
  templateUrl: './injecao.component.html',
  styleUrls: ['./injecao.component.css'],
  providers: [NomeTecService, MeuLogService]
})
export class InjecaoComponent implements OnInit {

  constructor(public Tecs: NomeTecService) {
    Tecs.getNomesTec();
  }

  ngOnInit() {
  }

}
