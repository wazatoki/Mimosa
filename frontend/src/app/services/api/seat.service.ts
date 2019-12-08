import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Seat } from '../../model/seat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor( private http: HttpService ) { }

  findById(id: string): Observable<Seat> {
    const data: Map<string, string> = new Map();
    data.set('id', id);
    return this.http.get<Seat>( 'seat', data );
  }

  findAll(): Observable<Seat[]> {
    return this.http.get<Seat[]>( 'seat' );
  }

  add(data: Seat[]): Observable<Seat[]> {
    return this.http.post<Seat[]>( 'seat', data );
  }
}
