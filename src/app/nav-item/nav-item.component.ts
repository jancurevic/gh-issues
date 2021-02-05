import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input()
  item!: NavItem;

  constructor() { }

  ngOnInit(): void {
  }

}
