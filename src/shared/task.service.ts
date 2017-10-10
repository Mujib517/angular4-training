import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get("http://localhost:4000/tasks")
            .map(response => response.json()); //serialization
    }

    save(task): Observable<any> {
        return this.http.post("http://localhost:4000/tasks", task)
            .map(response => response.json())
            .catch((err) => Observable.throw(err));
    }

    remove(id): Observable<any> {
        return this.http.delete("http://localhost:4000/tasks/" + id)
            .map(response => response.json());
    }
}