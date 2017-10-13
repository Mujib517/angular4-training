import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../shared/task.service';
import { Task } from '../../shared/models/task.model';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.html'
})
export class NewTaskComponent {

    task: Task;
    categories: ["General", "Shopping", "Other"];

    constructor(private taskSvc: TaskService, private router: Router) {
        this.task = new Task();
    }

    onSave() {
        this.task.id = Math.floor((Math.random() * 100))
        this.taskSvc.save(this.task)
            .subscribe(
            () => {
                this.router.navigate(["/tasks"]);
                this.clearAll();
            })
    }

    clearAll() {
        this.task = new Task();
    }

}
