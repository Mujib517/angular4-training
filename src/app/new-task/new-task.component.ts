import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../shared/task.service';

@Component({
    selector: 'app-new-task',
    template: `<div class="row">
  <div class="col-md-4">
      <form #frm="ngForm">
        <div class="form-group">
              <input #txtName="ngModel" type="text" name="name" placeholder="Name" class="form-control" [(ngModel)]="task.name"/>
              <span class="text-danger" *ngIf="txtName.dirty && txtName.errors?.required">Required</span>
              <span class="text-danger" *ngIf="txtName.dirty && txtName.errors?.minlength">Min 3 Chars</span>
              <span class="text-danger" *ngIf="txtName.dirty && txtName.errors?.maxlength">Max 10 Chars</span>
          </div>
          <div class="form-group">
              <input type="text" #txtCategory="ngModel" name="category" placeholder="Category" class="form-control" [(ngModel)]="task.category"
                  />
              <span class="text-danger" *ngIf="txtCategory.dirty&&txtCategory.errors?.required">Required</span>
          </div>
          <div class="form-group">
              <input type="text" name="priority" placeholder="Priority" class="form-control" [(ngModel)]="task.priority" />
          </div>
          <div class="form-group">
              <button class="btn btn-success pull-right" (click)="onSave()" [disabled]="frm.invalid">
                  Save New task
                  <i class="glyphicon glyphicon-plus"></i>
              </button>
          </div>
      </form>
  </div>
</div>
  `,
    styles: []
})
export class NewTaskComponent {

    task: any;

    constructor(private taskSvc: TaskService, private router: Router) {
        this.task = {};
    }

    onSave() {
        this.task.id = Math.floor((Math.random() * 100))
        this.taskSvc.save(this.task)
            .subscribe(
            () => {
                this.router.navigate(["/tasks"]);
                this.clearAll();
            })
    }

    clearAll() {
        this.task = {};
    }

}
