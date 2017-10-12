import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TaskService } from './task.service';

@Injectable()
export class TaskResolver implements Resolve<any> {

    constructor(private taskSvc: TaskService) { }

    resolve() {
        return this.taskSvc.get();
    }
}