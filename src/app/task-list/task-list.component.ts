import { Component } from '@angular/core';
import { TaskService } from "../../shared/task.service";
import { Http } from '@angular/http';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.html',
    providers: [TaskService],
})
export class TaskListComponent {

    tasks: any;
    task: any = {};

    //constructor injection
    constructor(private taskSvc: TaskService) {
        this.loadData();
    }

    onSave() {
        this.task.id = Math.floor((Math.random() * 100))
        this.taskSvc.save(this.task)
            .subscribe(
            () => {
                this.loadData();
                this.clearAll();
            })
    }

    loadData() {
        this.tasks = this.taskSvc.get();
    }

    clearAll() {
        this.task = {};
    }

}