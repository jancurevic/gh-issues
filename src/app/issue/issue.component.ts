import { Component, Input } from '@angular/core';
import { Issue } from '../issue-list/issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent{

  @Input()
  issue!: Issue;

  constructor() { }

  changeFavourite() {
    this.issue.isFavourite = !this.issue.isFavourite;
  }
}
