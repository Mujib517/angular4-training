import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home Page</h1>
    <h1 [dlShow]="true">Show directive demo</h1>

    <h1 *dlIf="false">If Directive Demo</h1>
  `,
  styles: []
})
export class HomeComponent { }
