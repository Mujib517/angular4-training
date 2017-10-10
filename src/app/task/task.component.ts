import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { TaskService } from '../../shared/task.service';

@Component({
    selector: 'app-task',
    template: `
    <div class="row">
        <h3>{{task.name | uppercase}}</h3>
           <b class="text-muted">{{task.category | lowercase}}</b>
           <div class="text-muted">Completed: 
                <input type="checkbox" disabled="true" [(ngModel)]="task.completed"/>
           </div>
           <div>
              <i [ngClass]="task.priority==='high'?'text-danger':'text-success'" class="glyphicon glyphicon-time"> {{task.priority}}</i>
           </div>
           <div class="pull-right">
            {{task.createdDate | date: 'MM-dd-yyyy hh:mm'}}
                {{task.createdDate | time}}
           </div>
           </div>
           <div class="row">
           <button class="btn btn-danger btn-sm pull-right" (click)="onRemove(task.id)">
               Remove
               <i class="glyphicon glyphicon-remove"></i>
           </button>
      </div>
        
           `
})
export class TaskComponent {

    @Input()
    task;

    @Output()
    notify: EventEmitter<any>;

    constructor(private taskSvc: TaskService) {
        this.notify = new EventEmitter();
    }

    onRemove(id) {
        this.notify.emit({ id: 1 });
        // this.taskSvc.remove(id)
        //     .subscribe(
        //     () => this.notify.emit()
        //     );
    }
}