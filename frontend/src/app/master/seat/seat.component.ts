import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Form } from '@angular/forms';

import { Seat } from '../../model/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  seatsForm: FormGroup;

  get seats(): FormArray {
    return this.seatsForm.get('seats') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.seatsForm = this.fb.group({
      seats: this.fb.array([]),
    });
    this.pushEmptyElement();
  }

  ngOnInit() {
  }

  pushEmptyElement() {
    for (let i: number = 0; i < 10; i++) {
      this.seats.push(this.fb.control(''));
    }
  }

  save() {
    const saveData: Seat[] = [];
    for (let i: number = 0; i < this.seats.length; i++) {
      if (this.seats[i] !== '') {
        saveData.push(this.seats[1]);
      }
    }
  }

}
