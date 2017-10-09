import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { TimePipe } from './time.pipe';

@NgModule({
    imports: [],
    declarations: [TimePipe],
    providers: [TaskService],
    exports: [TimePipe]

})
export class SharedModule { }