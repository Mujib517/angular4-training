import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

    private url = "http://localhost:4000/tasks/";

    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get(this.url)
            .map(response => response.json()); //serialization
    }

    save(task): Observable<any> {
        return this.http.post(this.url, task)
            .map(response => response.json())
            .catch((err) => Observable.throw(err));
    }
    
    remove(id): Observable<any> {
        return this.http.delete(`${this.url}${id}`)
            .map(response => response.json());
    }

    getById(id){
        return this.http.get(`${this.url}${id}`)
        .map(response => response.json());
    }
}