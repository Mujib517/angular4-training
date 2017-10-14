import { TaskDetailComponent } from "./task-detail.component";
import { Observable } from "rxjs/Observable";

describe("Task Detail", () => {

    let comp, taskSvc, activeRoute;

    beforeEach(() => {

        let obs = Observable.from([1, 2, 3]);

        taskSvc = jasmine.createSpyObj("taskSvc", ["getById"]);
        taskSvc.getById = jasmine.createSpy("getById").and.returnValue(obs);

        activeRoute = {
            snapshot: {
                params: {
                    id: 2
                }
            }
        };

        comp = new TaskDetailComponent(taskSvc, activeRoute);
    });

    it('should have task deined', () => {
        expect(comp.task).toBeDefined();
    });

    it('should call getById of task service', () => {
        comp.ngOnInit();
        expect(taskSvc.getById).toHaveBeenCalledWith(2);
    });

})