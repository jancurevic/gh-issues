import { Component, Input } from '@angular/core';
import { Issue } from '../issue-list/issue.service';

@Component({
  selector: 'issue-group',
  templateUrl: './issue-group.component.html',
  styleUrls: ['./issue-group.component.css']
})
export class IssueGroupComponent {

  @Input()
  date!: string;
  @Input()
  group!: Issue[];

  constructor() { }

}
