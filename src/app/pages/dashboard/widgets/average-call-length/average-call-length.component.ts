import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-average-call-length',
  templateUrl: './average-call-length.component.html',
  styleUrls: ['./average-call-length.component.scss']
})
export class AverageCallLengthComponent implements OnInit {
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
    this.ctx = document.getElementById('averageCallLength');
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['2004','2006', '2008', '2010', '2012', '2014', '2016', ],
        datasets: [{
          label: '# of Votes',
          barThickness: 20,
          borderRadius: 10,
          borderColor: 'transparent',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            '#349CC8',
          ],
          }, { 
              label: 'Product B',
              borderRadius: 10,
              borderColor: 'transparent',
              data: [28, 48, 40, 19, 86, 27, 90],
              borderWidth: 2,
              barThickness: 20,
              backgroundColor: [
                '#349CC8',
              ]
            }
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
            display: false,
            position: 'top',
          }
        },
        scales: {
          y: {
            display: false,
            grid: {
              offset: false,
              display: false
            }
          },
          x : {
            grid: {
              offset: false,
              display: false,
            }
          }
        }
      }
    })
  }
}
