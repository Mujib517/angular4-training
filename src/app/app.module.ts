import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from "./task-list/task-list.component";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent,TaskListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }