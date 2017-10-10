import { Component } from '@angular/core';
import { TaskService } from "../../shared/task.service";
import { Http } from '@angular/http';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.html'
})
export class TaskListComponent {

    tasks: any;
    task: any = {};

    //constructor injection
    constructor(private taskSvc: TaskService) {
        this.loadData();
    }

    loadData() {
        this.tasks = this.taskSvc.get();
    }

    onNotified(event) {
        console.log(event);
    }
}