import { Component, OnInit } from '@angular/core';

import { Seat } from '../../model/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  seats: Seat[];

  constructor() {
  }

  ngOnInit() {
  }

}
