import { CartItem } from './../../restaurant-detail/shapping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  EmitIncreaseQty(item : CartItem){
    this.increaseQty.emit(item)
  }

  EmitDecreaseQty(item : CartItem){
    this.decreaseQty.emit(item)
  }
  Emitremove(item : CartItem){
    this.remove.emit(item)
  }
}
