import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Issue {
  label: string;
  isOpen: boolean;
  isFavourite: boolean;
  date: string;
}

@Injectable({ providedIn: 'root' })
export class IssueService {
  api = 'https://api.github.com/';

  issues: Issue[] = [];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Issue[]> {
    return this.http.get<any[]>(`${this.api}repos/angular/angular/issues`).pipe(
      map((data) => {
        return data.map((issue) => ({
          label: issue.title,
          isOpen: issue.state === 'open',
          isFavourite: issue.comments > 0,
          date: moment(new Date(issue.created_at)).format('DD-MM-YYYY'),
        }));
      })
    );
  }

  getAllClosed() {
    return this.issues.filter((issue) => !issue.isOpen);
  }

  getAllOpen() {
    return this.issues.filter((issue) => issue.isOpen);
  }

  //issues: Issue[] = [
  //   {
  //     label: 'issue0',
  //     isOpen: true,
  //     isFavourite: true,
  //     date: '01-02-2020',
  //   },
  //   {
  //     label: 'issue1',
  //     isOpen: true,
  //     isFavourite: false,
  //     date: '01-02-2020',
  //   },
  //   {
  //     label: 'issue2',
  //     isOpen: true,
  //     isFavourite: false,
  //     date: '01-02-2020',
  //   },
  //   {
  //     label: 'issue3',
  //     isOpen: true,
  //     isFavourite: true,
  //     date: '02-02-2020',
  //   },
  //   {
  //     label: 'issue4',
  //     isOpen: true,
  //     isFavourite: true,
  //     date: '02-02-2020',
  //   },
  //   {
  //     label: 'issue5',
  //     isOpen: false,
  //     isFavourite: false,
  //     date: '02-02-2020',
  //   },
  //   {
  //     label: 'issue6',
  //     isOpen: true,
  //     isFavourite: false,
  //     date: '03-02-2020',
  //   },
  //   {
  //     label: 'issue7',
  //     isOpen: true,
  //     isFavourite: false,
  //     date: '04-02-2020',
  //   },
  //   {
  //     label: 'issue8',
  //     isOpen: false,
  //     isFavourite: true,
  //     date: '05-02-2020',
  //   },
  //   {
  //     label: 'issue9',
  //     isOpen: true,
  //     isFavourite: true,
  //     date: '05-02-2020',
  //   },
  // ];
}
