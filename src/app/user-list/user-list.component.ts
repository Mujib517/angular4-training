import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TaskService } from "../../shared/task.service";

@Component({
  selector: 'app-user-list',
  template: `

{{users|json}}

<ul>
  <li *ngFor="let user of users">{{user.login}}</li>
</ul>

  `
})
export class UserListComponent {

  users: any = [];

  constructor(private http: Http) {  }

  ngOnInit() {
     this.http.get('https://api.github.com/users')
      .subscribe(function (response) {
        this.users = response;
        console.log(this.users);
      });
  }


}
