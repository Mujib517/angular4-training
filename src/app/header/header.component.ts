import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header>
  <nav>
      <div class="container">
          <div class="navbar navbar-inverse">
              <div class="navbar-header">
                  <div class="navbar-brand">
                      My Task Manager
                  </div>
              </div>
              <ul class="nav navbar-nav">
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Tasks</a></li>
                  <li><a href="">Contact</a></li>
              </ul>
          </div>
      </div>
  </nav>
</header>  `
})
export class HeaderComponent {

}
