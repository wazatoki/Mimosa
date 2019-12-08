import { TestBed } from '@angular/core/testing';

import { SeatService } from './seat.service';
import { HttpService } from '../http.service'

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Seat } from '../../model/seat';
import { of } from 'rxjs';

describe('SeatService', () => {

  let httpTestingController: HttpTestingController;
  let seatService: SeatService;
  let httpServiceSpy: jasmine.SpyObj<HttpService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('HttpService', ['get', 'post', 'put']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: HttpService, useValue: spy },
      ]
    })
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: SeatService = TestBed.get(SeatService);
    expect(service).toBeTruthy();
  });
});
