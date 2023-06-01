import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../types';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  constructor(private service: PensamentoService, private router: Router) {}

  listaPensamentos: Pensamento[] = [];

  paginaAtual: number = 1;

  maisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = "Meu Mural";

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  listarFavoritos = () => {
    this.titulo = "Meus favoritos";
    this.favoritos = true;
    this.maisPensamentos = true;
    this.paginaAtual = 1;

    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((lista) => {
        this.listaPensamentos = lista;
        this.listaFavoritos = lista;
      });
  };

  recaregarComponente = () => {
    this.favoritos = false;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate([this.router.url])
  };

  pesquisarPensamentos = () => {
    this.maisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  };

  carregarMaisPensamentos = () => {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);

        if (!listaPensamentos.length) {
          this.maisPensamentos = false;
        }
      });
  };
}
