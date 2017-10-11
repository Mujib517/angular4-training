import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from "../../shared/task.service";
import { Http } from '@angular/http';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.html'
})
export class TaskListComponent implements OnInit, OnDestroy {
    obs;
    tasks: any;
    task: any = {};
    hasError;

    //constructor injection
    constructor(private taskSvc: TaskService) {

    }

    //life cycle hook
    ngOnInit() {
        this.loadData();
    }

    ngOnDestroy() {
        console.log("unsubscribing");
        this.obs.unsubscribe();
    }

    loadData() {
        this.obs = this.taskSvc.get()
            .subscribe(

            (data) => this.tasks = data,
            (err) => this.hasError = true
            );
    }

    onNotified(event) {
        console.log(event);
    }
}