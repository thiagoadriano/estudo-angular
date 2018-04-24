import { Component } from '@angular/core';
import { AlertaService } from './services/alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estudo Angular';
  foto = 'favicon.ico';
  desenvolvimento = ['Angular', 'VUE', 'knockout'];

  constructor(public service: AlertaService) {}

  enviarMsg(): void {
    this.service.msgAlerta();
  }

  valorPassado(item) {
    alert(item);
  }
}
