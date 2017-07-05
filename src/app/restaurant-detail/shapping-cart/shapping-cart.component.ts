import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service'

@Component({
  selector: 'mt-shapping-cart',
  templateUrl: './shapping-cart.component.html'
})
export class ShappingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService ) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items
  }

  total(): number {
    return this.shoppingCartService.total()
  }

}
