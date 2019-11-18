import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedOrderListComponent } from './checked-order-list.component';

describe('CheckedOrderListComponent', () => {
  let component: CheckedOrderListComponent;
  let fixture: ComponentFixture<CheckedOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
