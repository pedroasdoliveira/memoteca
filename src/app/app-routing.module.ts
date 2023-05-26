import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './components/pensamentos/criar/criar.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "listarPensamentos",
    pathMatch: "full"
  },
  {
    path: "criarPensamento",
    component: CriarComponent
  },
  {
    path: "listarPensamentos",
    component: ListarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
