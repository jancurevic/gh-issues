import { Issue, IssueService } from './issue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issueObj: any = {};
  issueGroup: any = [];
  issues!: Issue[];
  loading!: boolean;

  constructor(private issue: IssueService) {}

  ngOnInit(): void {
    this.loading = true;
    this.issue.getAll().subscribe(issues => {
      this.issues = issues;
      this.issues.forEach((issue) => {
        if (this.issueObj[issue.date]) {
          this.issueObj[issue.date].push(issue);
        } else {
          this.issueObj[issue.date] = [issue];
        }
      });
  
      for (let key in this.issueObj) {
        this.issueGroup.push(this.issueObj[key]);
      }
      this.loading = false;
    })
  }
}
