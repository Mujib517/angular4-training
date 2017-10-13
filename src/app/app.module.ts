import { NgModule } from '@angular/core';
import { BrowserModule, FormsModule, HttpModule, SharedModule, AppRouterModule } from './module.barrel';

import { TaskService } from "../shared/task.service";
import { TimePipe } from "../shared/time.pipe";

import {
    HomeComponent, AppComponent, TaskListComponent,
    TitleComponent, TaskComponent, FooterComponent, UserListComponent, HeaderComponent, NewTaskComponent, AboutComponent, ContactComponent, TaskDetailComponent
} from './app.barrel';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SharedModule, AppRouterModule],
    declarations: [AppComponent, HomeComponent, TaskListComponent,
        TitleComponent, TaskComponent, FooterComponent, UserListComponent, 
        HeaderComponent, NewTaskComponent, AboutComponent, ContactComponent, 
        TaskDetailComponent],
    providers: [TaskService],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }