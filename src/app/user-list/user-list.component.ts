import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/toPromise';

import { TaskService } from "../../shared/task.service";

@Component({
  selector: 'app-user-list',
  template: `
<div class="col-md-5">
  <div class="well" *ngFor="let user of users | async">
  
    <h4>{{user.login}}</h4>
    <img class="img img-circle" [src]="user.avatar_url" width="180" height="180"/>
  
  </div>
  
</div>

  `
})
export class UserListComponent {

  users;

  constructor(private http: Http) { }

  ngOnInit() {
    this.users = this.http.get('https://api.github.com/users')
      .map(response => response.json())
      .toPromise()
      .then(this.success)
      .catch(this.error);
    // .subscribe(function (response) {
    //   this.users = response;
    //   console.log(this.users);
    // });
  }

  success(data) {
    console.log(data);
  }

  error(err) {
    console.log(err);
  }

}
