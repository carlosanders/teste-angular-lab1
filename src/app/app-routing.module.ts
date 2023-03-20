import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  {path: '', component: ListaProdutosComponent},
  { path: 'produtos/:productId', component: DetalheProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
