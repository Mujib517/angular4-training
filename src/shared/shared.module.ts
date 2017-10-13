import { NgModule} from '@angular/core';
import { TaskService } from './task.service';
import { TimePipe } from './time.pipe';
import { ShowDirective } from './show.directive';
import { IfDirective } from './if.directive';

@NgModule({
    imports: [],
    declarations: [TimePipe, ShowDirective, IfDirective],
    providers: [TaskService],
    exports: [TimePipe, ShowDirective, IfDirective]

})
export class SharedModule { }