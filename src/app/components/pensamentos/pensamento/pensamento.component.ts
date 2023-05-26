import { Component, Input } from '@angular/core';
import { Pensamento } from '../types';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  constructor() {}

  @Input() pensamento: Pensamento = {
    conteudo: "Estudando Angular",
    autoria: "Pedro",
    modelo: "modelo3"
  }

  larguraPensamento = (): string => {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g' // Classe Css
    }
    return "pensamento-p" // Classe Css
  }
}
