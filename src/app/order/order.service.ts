import { MEAT_API } from './../app.api';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Order, OrderItem } from './order.model';
import { CartItem } from './../restaurant-detail/shapping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shapping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http){}

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item : CartItem){
        this.cartService.removeItem(item)
    }

    clear(){
      this.cartService.clear()
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    checkOrder(order: Order): Observable <string>{
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(`${MEAT_API}orders`,
                                JSON.stringify(order),
                                new RequestOptions({headers: headers}))
                              .map(response=>response.json())
    }
}
