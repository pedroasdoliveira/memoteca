import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../types';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  constructor(private service: PensamentoService) {}

  listaPensamentos: Pensamento[] = [];

  paginaAtual: number = 1;

  maisPensamentos: boolean = true;

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos = () => {
    this.service.listar(++this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);

      if (!listaPensamentos.length) {
        this.maisPensamentos = false;
      }
    });
  };
}
