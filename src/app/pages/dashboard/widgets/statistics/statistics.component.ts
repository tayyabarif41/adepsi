import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

}
