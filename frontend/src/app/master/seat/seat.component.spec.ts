import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { SeatComponent } from './seat.component';

import { LayoutHeaderSidebarContentsComponent } from '../../layout-header-sidebar-contents/layout-header-sidebar-contents.component';
import { HeaderComponent } from '../../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('SeatComponent', () => {
  let component: SeatComponent;
  let fixture: ComponentFixture<SeatComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SeatComponent,
        LayoutHeaderSidebarContentsComponent,
        HeaderComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        FormBuilder,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display array data', () => {
    const seat =  component.seats.at(0) as FormControl;
    seat.setValue('sample value');
    const inputEL: HTMLInputElement = debugElement
      .query(By.css('input.seat-id')).nativeElement;
    fixture.detectChanges();
    expect(inputEL.value).toBe('sample value');
  });

  it('should bind input data', () => {
    const seat =  component.seats.at(0) as FormControl;
    const inputEL: HTMLInputElement = debugElement
      .query(By.css('input.seat-id')).nativeElement;
    inputEL.value = 'sample value2';
    inputEL.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(seat.value).toBe('sample value2');
  });
});
