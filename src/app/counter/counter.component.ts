import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>You have <span>{{counter}}</span> todos.</p>`,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter: Number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
  }

}
