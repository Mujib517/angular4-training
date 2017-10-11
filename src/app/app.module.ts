import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from "./task-list/task-list.component";
import { TitleComponent } from './title/title.component';
import { TaskComponent } from "./task/task.component";
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from "./user-list/user-list.component";
import { HttpModule } from "@angular/http";
import { TimePipe } from "../shared/time.pipe";
import { TaskService } from "../shared/task.service";
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AppRouterModule } from './router.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SharedModule,AppRouterModule],
    declarations: [AppComponent, HomeComponent, TaskListComponent,
        TitleComponent, TaskComponent, FooterComponent, UserListComponent, HeaderComponent, NewTaskComponent, AboutComponent, ContactComponent, TaskDetailComponent],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }