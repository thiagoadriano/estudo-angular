import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './components/lista-pessoa/lista-pessoa.component';
import { AlertaService } from './services/alerta.service';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InjecaoComponent } from './components/injecao/injecao.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    DiretivasComponent,
    InputsComponent,
    FormularioComponent,
    InjecaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
