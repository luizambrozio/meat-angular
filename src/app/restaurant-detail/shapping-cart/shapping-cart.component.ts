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

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.additem(item)
  }

  total(): number {
    return this.shoppingCartService.total()
  }

}
