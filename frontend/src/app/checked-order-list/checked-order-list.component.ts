import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';

@Component({
  selector: 'app-checked-order-list',
  templateUrl: './checked-order-list.component.html',
  styleUrls: ['./checked-order-list.component.css']
})
export class CheckedOrderListComponent implements OnInit {

  orders: Order[];

  constructor() {
    this.orders = [];
  }

  ngOnInit() {
  }

}
