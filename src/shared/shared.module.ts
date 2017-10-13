import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { TimePipe } from './time.pipe';
import { ShowDirective } from './show.directive';

@NgModule({
    imports: [],
    declarations: [TimePipe, ShowDirective],
    providers: [TaskService],
    exports: [TimePipe, ShowDirective]

})
export class SharedModule { }