import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-task',
    template: `
          <h3>{{task.name}}</h3>
           <b class="text-muted">{{task.category}}</b>
           <div class="text-muted">Completed: 
                <input type="checkbox" disabled="true" [(ngModel)]="task.completed"/>
           </div>
           <div>
              <i [ngClass]="task.priority==='high'?'text-danger':'text-success'" class="glyphicon glyphicon-time"> {{task.priority}}</i>
           </div>
           <div class="pull-right">
            {{task.createdDate}}
           </div>
    `
})
export class TaskComponent {

    @Input()
    task;
}