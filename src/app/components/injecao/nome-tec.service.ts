import { Injectable } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomeTecService {
  tecnologias: Array<string> = ['Angular', 'Typescript',  'JavaScript', 'HTML5', 'CSS3'];

  constructor(
    public meulog: MeuLogService
  ) { }

  getNomesTec(): Array<string> {
    this.meulog.setLog('Consultou o Array');
    return this.tecnologias;
  }
}
