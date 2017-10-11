import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../shared/task.service';

@Component({
  selector: 'app-task-detail',
  template: ` <div class="panel panel-info">
    <div class="panel-heading"><h3>{{task.name}}</h3></div>
    <div class="panel-body">
      <div>{{task.category}}</div>
      <div>{{task.priority}}</div>
    </div>
  </div>`,
  styles: []
})
export class TaskDetailComponent implements OnInit,OnDestroy {
  task;

  constructor(private taskSvc: TaskService, private activeRoute: ActivatedRoute) {
    this.task = {};
    //light weight
  }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params.id;

    this.taskSvc.getById(id)
      .subscribe(
      (response) => this.task = response
      );
  }

  ngOnDestroy() {
    console.log("Cleanup logic");
  }
}
