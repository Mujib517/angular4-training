import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../shared/task.service';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.html'
})
export class NewTaskComponent {
    
    task: any;
    categories:["General","Shopping","Other"];

    constructor(private taskSvc: TaskService, private router: Router) {
        this.task = {};
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
        this.task = {};
    }

}
