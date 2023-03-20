import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto, produtos } from './../produtos';

@Component({
  selector: 'app-detalhe-produtos',
  templateUrl: './detalhe-produtos.component.html',
  styleUrls: ['./detalhe-produtos.component.scss'],
})
export class DetalheProdutosComponent {
  produto: Produto | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const produtoIdRoute = Number(routeParams.get('productId'));
    // console.log('aqui'+ produtoIdRoute)
    this.produto = produtos.find((produto) => produto.id === produtoIdRoute);
  }
}
