import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
