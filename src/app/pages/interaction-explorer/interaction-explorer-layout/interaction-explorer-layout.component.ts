import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-explorer-layout',
  templateUrl: './interaction-explorer-layout.component.html',
  styleUrls: ['./interaction-explorer-layout.component.scss']
})
export class InteractionExplorerLayoutComponent implements OnInit {
  filterDropdown: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
