import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

import { MenuDetailComponent } from './menu-detail.component';
import { Item } from '../../model/item';

describe('MenuDetailComponent', () => {
  let component: MenuDetailComponent;
  let fixture: ComponentFixture<MenuDetailComponent>;
  let debugElement: DebugElement;

  const data: Item = {
      id: 'sampleitemid1',
      name: 'sample name 1',
      price: 10000,
      unit: '個',
      detail: '',
      rowOrder: 1,
      categories: [],
      orders: [],
    };

    const locationSpy = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ MenuDetailComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: {snapshot: {paramMap: {get: (key: string) => 'test-id' }}}},
        {provide: Location, useValue: locationSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailComponent);
    component = fixture.componentInstance;
    component.item = data;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called goBack', () => {
    const button: HTMLElement = debugElement.query(By.css('button.go-back-button')).nativeElement;
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(locationSpy.back).toHaveBeenCalled();
  });
});
