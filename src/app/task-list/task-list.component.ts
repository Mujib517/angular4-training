import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from "../../shared/task.service";
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../shared/models/task.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.html'
})
export class TaskListComponent implements OnInit, OnDestroy {
    obs;
    tasks: Array<Task>;
    task: any = {};
    hasError;

    //constructor injection
    constructor(private taskSvc: TaskService, private activatedRoute: ActivatedRoute) {

    }

    //life cycle hook
    ngOnInit() {
        this.tasks = this.activatedRoute.snapshot.data["tasks"];
    }

    ngOnDestroy() {
        // console.log("unsubscribing");
        // this.obs.unsubscribe();
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