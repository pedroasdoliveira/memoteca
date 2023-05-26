import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Pensamento } from '../types';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
})
export class CriarComponent {
  constructor(
    private location: Location,
    private service: PensamentoService,
    private router: Router
  ) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  handleCriarPensamento = () => {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    });
  };

  handleCancelar = () => {
    this.location.back();
  };
}
