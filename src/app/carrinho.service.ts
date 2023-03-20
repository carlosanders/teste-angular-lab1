import { Produto } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: Produto[] = [];

  constructor() {}

  adicionarCarrinho(produto: Produto) {
    this.itens.push(produto);
  }

  pegarItens() {
    return this.itens;
  }
  limparCarrinho() {
    this.itens = [];
    return this.itens;
  }
}
