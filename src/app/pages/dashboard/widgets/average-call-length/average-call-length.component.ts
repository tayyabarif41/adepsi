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
  loading: boolean = false;
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.drawChart()
    }, 1000)
  }
  drawChart() {
    this.ctx = document.getElementById('averageCallLength');
    this.ctx = this.ctx.getContext("2d");

    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['2004', '2006', '2008', '2010', '2012', '2014', '2016'],
        datasets: this.setData(),
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
          x: {
            grid: {
              offset: false,
              display: false,
            }
          }
        }
      }
    })
  }
  setData() {
    let gradient = this.ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(1, 'rgba(0,151,207,1)');
    gradient.addColorStop(0, 'rgba(255,255,255, 0)');
    let arr = []
    for (let i = 0; i < 10; i++) {
      let obj = {
        label: 'Test' + i,
        borderRadius: 10,
        borderColor: 'transparent',
        borderWidth: 2,
        data: this.getRandomData(),
        backgroundColor: gradient
      }
      arr.push(obj)
    }

    return arr
  }
  getRandomData() {
    let arr = [];
    for (let j = 0; j < 8; j++) {
      let random = Math.random() * (100 - 0) + 0;
      arr.push(random)
    }
    return arr
  }
}
