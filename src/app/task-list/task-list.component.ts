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
    hasError;

    //constructor injection
    constructor(private taskSvc: TaskService) {
        this.loadData();
    }

    loadData() {
        this.taskSvc.get()
            .subscribe(

            (data) => this.tasks = data,
            (err) => this.hasError = true
            );
    }

    onNotified(event) {
        console.log(event);
    }
}