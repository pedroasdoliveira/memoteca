import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../types';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  pensamento: Pensamento = {
    id: 0,
    autoria: '',
    conteudo: '',
    modelo: 'modelo1'
  }

  handleEditarPensamento = () => {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamentos"])
    })
  }

  handleCancelar = () => {
    this.router.navigate(["/listarPensamentos"])
  }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id")

      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
      })
  }
}
