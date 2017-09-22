import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.html'
})
export class AppComponent {
    //title: string = "Hello Angular";
    private title = "Task Manager";
    myProperty: boolean = false;

    private getTitle(): string {
        return this.title;
    }

    onClick(val: number): void {

        // if (this.myProperty) this.myProperty = false;
        // else this.myProperty = true;

        this.myProperty = !this.myProperty;
    }
}