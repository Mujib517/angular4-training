import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
   <h1>About Page</h1>
`,
  styles: []
})
export class AboutComponent {

  myVar = 10;

  onClick() {
    this.myVar += 10;
  }

}
