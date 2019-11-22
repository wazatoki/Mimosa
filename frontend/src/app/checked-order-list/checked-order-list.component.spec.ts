import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedOrderListComponent } from './checked-order-list.component';
import { Order } from '../model/order';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

describe('CheckedOrderListComponent', () => {
  let component: CheckedOrderListComponent;
  let fixture: ComponentFixture<CheckedOrderListComponent>;

  const data: Order[] = [
    {
      id: 'sampleorderid1',
      date: new Date('2010/1/1 10:10'),
      seatID: '1',
      item: {
        id: 'sampleitemid1',
        name: 'sample name 1',
        price: 10000,
        unit: '個',
        categories: [{ id: '', name: 'aaa', items: [] }],
        orders: [],
      },
      quantity: 1,
      isCompleted: false,
      isChecked: false,
    },
    {
      id: 'sampleorderid2',
      date: new Date('2010/2/2 12:12'),
      seatID: '2',
      item: {
        id: 'sampleitemid2',
        name: 'sample name 2',
        price: 20000,
        unit: '皿',
        categories: [{ id: '', name: 'bbb', items: [] }],
        orders: [],
      },
      quantity: 2,
      isCompleted: false,
      isChecked: false,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckedOrderListComponent],
      imports: [
        MatListModule,
        MatGridListModule,
        MatButtonModule,
        MatDividerModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedOrderListComponent);
    component = fixture.componentInstance;
    component.orders = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
