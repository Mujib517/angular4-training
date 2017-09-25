import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.html'

})
export class TaskListComponent {

    myProperty: boolean;

    tasks: any = [
        { name: "Recharge mobile", priority: 'low' },
        { name: "Buy groceries" },
        { name: "Go Shop" }
    ];

    cls = ['red', 'greenbg'];
    style = { 'border': '5px solid gray' };

    toggleHeading() {
        this.myProperty = !this.myProperty;
    }

    //undefined
    //null
    //""
    //false
}