import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  scrollEve = false;
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    this.isScrolled = window.scrollY == 0 ? false : true;
    this.scrollEve = true;
    if(this.showMenu) {
      this.isScrolled = true;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
}
