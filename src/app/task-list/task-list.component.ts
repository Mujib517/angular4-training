import { Component } from '@angular/core';
import { TaskService } from "../../shared/task.service";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.html'

})
export class TaskListComponent {

    tasks: any;

    constructor() {
        var taskSvc = new TaskService();
        this.tasks = taskSvc.get();
    }
}