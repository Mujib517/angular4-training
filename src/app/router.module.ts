import { Routes, RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TaskResolver } from '../shared/task.resolver';


const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tasks', component: TaskListComponent, resolve: { tasks: TaskResolver } },
    { path: 'tasks/new', component: NewTaskComponent },
    { path: 'tasks/:id', component: TaskDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    declarations: [],
    exports: [RouterModule],
    providers: [TaskResolver]
})
export class AppRouterModule { }