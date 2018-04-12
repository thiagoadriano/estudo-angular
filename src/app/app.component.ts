import { Component } from '@angular/core';
import { AlertaService } from './services/alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Estudo Angular';
  foto:string = 'favicon.ico';

  constructor(public service:AlertaService){}

  enviarMsg():void{
    this.service.msgAlerta();
  }
}
