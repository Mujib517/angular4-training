import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/task.service';

@Component({
  selector: 'app-home',
  template: `<h1>Home Page</h1>
    <h1 [dlShow]="true">Show directive demo</h1>

    <h1 *dlIf="false">If Directive Demo</h1>

    
    <h1>{{count}}</h1>

    <button class="btn btn-success" (click)="inc()">Increment</button>
    <button class="btn btn-success" (click)="call()">Make Call</button>


  `,
  styles: []
})
export class HomeComponent {
  count = 0;
  interval;

  //change detection
  constructor(private taskSvc: TaskService) {
    this.interval = setInterval(() => this.count++, 1000);
  }

  inc() {
    this.count++;
  }

  call() {
    this.taskSvc.get()
      .subscribe(
      () => this.count = 10
      )
  }

  ngOnDesstroy() {
    this.interval.clearInterval();
  }
}
