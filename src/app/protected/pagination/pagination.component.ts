import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; // firebase

import { ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

interface IServerResponse {
  items: string[];
  total: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {

  @Input('data') meals: string[] = [];
  asyncMeals: Observable<string[]>;
  p: number = 1;
  total: number;
  loading: boolean;
  pagecurrent:number = 1;
  totalData:number;

  constructor(private db: AngularFireDatabase, ) {
    for (let i = 1; i <= 1000; i++) {
      this.meals.push(`${i}`);
      this.totalData = i;
    }
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals =
      this.serverCall(this.meals, page)
        .do(res => {
          this.total = res.total;
          this.p = page;
          this.pagecurrent = page;

          
          this.loading = false;
        })
        .map(res => res.items);
        
  }

  serverCall(meals: string[], page: number): Observable<IServerResponse> {
    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return Observable
      .of({
        items: meals.slice(start, end),
        total: this.totalData
      }).delay(1000);
  }

  ngOnInit() {
    this.getPage(1);
    console.log("this.meals",this.meals);
  }

}
