import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './components/pensamentos/criar/criar.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

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
  },
  {
    path: "pensamentos/excluirPensamento/:id",
    component: ExcluirPensamentoComponent
  },
  {
    path: "pensamentos/editarPensamento/:id",
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
