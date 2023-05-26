import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../types';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css'],
})
export class ExcluirPensamentoComponent implements OnInit {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
    id: 0,
  };

  excluirPensamento = () => {
    if (typeof this.pensamento.id === 'number') {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamentos']);
      });
    }
  };

  cancelar = () => {
    this.router.navigate(['/listarPensamentos']);
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }
}
