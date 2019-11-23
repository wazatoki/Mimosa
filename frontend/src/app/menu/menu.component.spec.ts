import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { Category } from '../model/category';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const data: Category[] = [
    {
      id: 'samplecategoryid1',
      name: '1',
      items: [
        {
          id: 'sampleitemid1',
          name: 'sample name 1',
          price: 10000,
          unit: '個',
          rowOrder: 1,
          categories: [],
          orders: [],
        },
        {
          id: 'sampleitemid2',
          name: 'sample name 2',
          price: 20000,
          unit: '皿',
          rowOrder: 2,
          categories: [],
          orders: [],
        },
      ]
    },
    {
      id: 'samplecategoryid2',
      name: '2',
      items: [
        {
          id: 'sampleitemid3',
          name: 'sample name 3',
          price: 30000,
          unit: '個',
          rowOrder: 1,
          categories: [],
          orders: [],
        },
        {
          id: 'sampleitemid2',
          name: 'sample name 2',
          price: 20000,
          unit: '皿',
          rowOrder: 2,
          categories: [],
          orders: [],
        },
      ]
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        MenuItemComponent,
      ],
      imports: [
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.categories = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
