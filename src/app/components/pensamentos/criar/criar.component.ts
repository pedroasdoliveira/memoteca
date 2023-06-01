import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Pensamento } from '../types';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
})
export class CriarComponent implements OnInit {
  constructor(
    private location: Location,
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  formulario!: FormGroup;

  ngOnInit(): void {
    // Tipo um useEffect do react
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(3)
        ]),
      ],
      modelo: ['modelo1'],
      favorito: [false]
    });
  }

  handleCriarPensamento = () => {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamentos']);
      });
    }
  };

  handleCancelar = () => {
    this.location.back();
  };

  habilitarBotao = (): string => {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
