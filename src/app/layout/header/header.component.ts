import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdown: boolean = false;
  bgColor: string = '#349CC8';
  fgColor: string = 'white';

  @HostListener("document:click", ["$event"]) onDocumentClick(event: any) {
    this.dropdown = false;
    this.resetColor()
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToSettings() {
    this.resetColor()
    this.router.navigate(['/home/settings']);
    this.dropdown = false;
  }

  logout() {
    this.router.navigate(['/']);
  }

  activateDropdown() {
    this.dropdown = !this.dropdown;
    if (this.dropdown) {
      this.setColors();
    } else {
      this.resetColor();
    }
  }

  setColors() {
    this.bgColor = 'white';
    this.fgColor = '#349CC8';
  }

  resetColor() {
    this.bgColor = '#349CC8';
    this.fgColor = 'white';
  }

}
