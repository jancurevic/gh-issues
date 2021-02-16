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

  constructor(private issue: IssueService) {}

  ngOnInit(): void {
    this.issue.getAll().subscribe(
      (issues) => {
        this.navItems = this.assignNavItems(
          issues.length,
          issues.filter((issue) => issue.isOpen).length,
          issues.filter((issue) => !issue.isOpen).length
        );
      },
      () => {
        this.navItems = this.assignNavItems();
      }
    );
  }

  assignNavItems(all: number = 0, open: number = 0, closed: number = 0) {
    return [
      {
        label: 'All',
        count: all,
        icon: '../../assets/icon-github.svg',
        isSelected: true,
      },
      {
        label: 'Open',
        count: open,
        icon: '../../assets/icon-open-issue.svg',
        isSelected: false,
      },
      {
        label: 'Closed',
        count: closed,
        icon: '../../assets/icon-closed-issue.svg',
        isSelected: false,
      },
    ];
  }

  selectTab(index: number) {
    this.navItems.forEach((item) => (item.isSelected = false));
    this.navItems[index].isSelected = true;
  }
}
