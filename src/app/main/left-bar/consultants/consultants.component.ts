import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss']
})
export class ConsultantsComponent implements OnInit {
  show = false;

  showFullInfo() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
