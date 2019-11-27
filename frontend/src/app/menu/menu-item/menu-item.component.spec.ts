import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule  } from '@angular/router/testing';

import { MenuItemComponent } from './menu-item.component';
import { Item } from '../../model/item';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  const data: Item[] = [
    {
      id: 'sampleitemid1',
      name: 'sample name 1',
      price: 10000,
      unit: '個',
      detail: '',
      rowOrder: 1,
      categories: [],
      orders: [],
    },
    {
      id: 'sampleitemid2',
      name: 'sample name 2',
      price: 20000,
      unit: '皿',
      detail: '',
      rowOrder: 2,
      categories: [],
      orders: [],
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatListModule,
        MatGridListModule,
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.items = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
