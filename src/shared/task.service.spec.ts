import { TaskService } from "./task.service";


describe("Task Service", () => {

    let svc, http;

    beforeEach(() => {

        let fakeResponse = {
            map: function () {
                return "body of the respone"
            }
        };

        http = jasmine.createSpyObj("http", ["get"]);
        http.get = jasmine.createSpy("get").and.returnValue(fakeResponse);


        svc = new TaskService(http);
    });

    fit('should call get method of http', () => {
        svc.get();

        expect(http.get).toHaveBeenCalledWith("http://localhost:4000/tasks/");
    })
})