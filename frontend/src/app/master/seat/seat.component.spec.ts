import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatComponent } from './seat.component';

import { LayoutHeaderSidebarContentsComponent } from '../../layout-header-sidebar-contents/layout-header-sidebar-contents.component';
import { HeaderComponent } from '../../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

describe('SeatComponent', () => {
  let component: SeatComponent;
  let fixture: ComponentFixture<SeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SeatComponent,
        LayoutHeaderSidebarContentsComponent,
        HeaderComponent
      ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatListModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    component.seats = this.seats = [
      { id: 'sampleid1', orders: [] },
      { id: 'sampleid2', orders: [] },
      { id: 'sampleid3', orders: [] }
    ];
    expect(component).toBeTruthy();
  });
});
