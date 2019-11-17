import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor() {
    this.orders = [];
  }

  ngOnInit() {
  }
}
