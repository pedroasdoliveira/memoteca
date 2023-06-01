import { Component, Input } from '@angular/core';
import { Pensamento } from '../types';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent {
  constructor(private service: PensamentoService) {}

  @Input() pensamento: Pensamento = {
    conteudo: 'Estudando Angular',
    autoria: 'Pedro',
    modelo: 'modelo3',
    favorito: false,
  };

  @Input() listaFavoritos: Pensamento[] = [];

  larguraPensamento = (): string => {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'; // Classe Css
    }
    return 'pensamento-p'; // Classe Css
  };

  mudarIconeFavorito = (): string => {
    if (this.pensamento.favorito === false) {
      return 'inativo';
    }
    return 'ativo';
  };

  atualizarFavoritos = () => {
    this.service.mudarfavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(
        this.listaFavoritos.indexOf(this.pensamento),
        1
      );
    });
  };
}
