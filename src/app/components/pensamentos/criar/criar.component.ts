import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent {
  constructor(private location: Location) {}

  pensamento = {
    id: "1",
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: "modelo1"
  }

  handleCriarPensamento = () => {
    alert("Funcionou")
  }

  handleCancelar = () => {
    this.location.back()
  }
}
