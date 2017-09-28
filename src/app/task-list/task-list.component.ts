import { Component } from '@angular/core';
import { TaskService } from "../../shared/task.service";
import { Http } from '@angular/http';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.html'

})
export class TaskListComponent {

    tasks: any;

    constructor(private http: Http) {

        var taskSvc = new TaskService(http);
        this.tasks = taskSvc.get();
    }
}