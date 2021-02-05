import { IssueService } from './../issue-list/issue.service';
import { Component, OnInit } from '@angular/core';

export interface NavItem {
  label: string;
  count: number;
  icon: string;
  isSelected: boolean;
}

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  navItems!: NavItem[];

  constructor(private issue:IssueService) {}

  ngOnInit(): void {
    this.navItems = [
      {
        label: 'All',
        count: this.issue.getAll().length,
        icon: '../../assets/icon-github.svg',
        isSelected: true,
      },
      {
        label: 'Open',
        count: this.issue.getAllOpen().length,
        icon: '../../assets/icon-open-issue.svg',
        isSelected: false,
      },
      {
        label: 'Closed',
        count: this.issue.getAllClosed().length,
        icon: '../../assets/icon-closed-issue.svg',
        isSelected: false,
      },
    ];
  }

  selectTab(index: number) {
    this.navItems.forEach(item => item.isSelected = false);
    this.navItems[index].isSelected = true;
  }
}
