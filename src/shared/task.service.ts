import { Http } from "@angular/http";

export class TaskService {

    constructor(private http:Http){}

    get() {
        return this.http.get("http://localhost:4000/tasks")
            .map(response=>response.json());
    }
}