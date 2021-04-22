import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-record-calls',
  templateUrl: './record-calls.component.html',
  styleUrls: ['./record-calls.component.scss']
})
export class RecordCallsComponent implements OnInit, AfterViewInit {
  ctx: any;
  myChart: any;
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.drawChart()
  }
  drawChart() {
    this.ctx = document.getElementById('myChart');
    this.myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [75, 25],
          backgroundColor: [
            '#349CC8',
            '#CCE6F1',
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: 80,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          }
        },
      }
    })
  }
}
