import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-task',
    template: `
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
           </div>`
})
export class TaskComponent {

    @Input()
    task;
}