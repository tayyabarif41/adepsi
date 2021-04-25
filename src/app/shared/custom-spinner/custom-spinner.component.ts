import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.scss']
})
export class CustomSpinnerComponent implements OnInit {
  @Input() color?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
