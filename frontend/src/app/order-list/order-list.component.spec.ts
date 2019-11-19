import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrderListComponent } from './order-list.component';
import { Order } from '../model/order';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
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
      declarations: [
        OrderListComponent,
      ],
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
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    component.orders = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data', () => {
    const orderListSeatDe: DebugElement = fixture.debugElement.query(By.css('.seat-id'));
    const orderListSeatEl: HTMLElement = orderListSeatDe.nativeElement;
    expect(orderListSeatEl.textContent).toContain('1');
    const orderListOrderDateDe: DebugElement = fixture.debugElement.query(By.css('.order-date'));
    const orderListOrderDateEl: HTMLElement = orderListOrderDateDe.nativeElement;
    expect(orderListOrderDateEl.textContent).toContain('1/1/ 10:10');
    const orderListItemNameDe: DebugElement = fixture.debugElement.query(By.css('.item-name'));
    const orderListItemNameEl: HTMLElement = orderListItemNameDe.nativeElement;
    expect(orderListItemNameEl.textContent).toContain('sample name 1');
    const orderListQuantityDe: DebugElement = fixture.debugElement.query(By.css('.quantity'));
    const orderListQuantityEl: HTMLElement = orderListQuantityDe.nativeElement;
    expect(orderListQuantityEl.textContent).toContain('1');
    const orderListUnitDe: DebugElement = fixture.debugElement.query(By.css('.unit'));
    const orderListUnitEl: HTMLElement = orderListUnitDe.nativeElement;
    expect(orderListUnitEl.textContent).toContain('個');
  });
});
