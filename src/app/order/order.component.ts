
import { Order, OrderItem } from './order.model'
import { CartItem } from './../restaurant-detail/shapping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';

import { RadioOption } from '../shared/radio/radio-option.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
      {label: 'Dinheiro', value: 'MON'},
      {label: 'Cartão Debito', value: 'DEB'},
      {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item : CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    order.orderItem = this.cartItems().map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) =>{
        console.log(`Compra concluida ${orderId}`)
        this.orderService.clear()
    })

  }
}
