import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
