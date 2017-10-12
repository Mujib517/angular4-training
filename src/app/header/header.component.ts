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
                  <li><a routerLink="/">Home</a></li>
                  <li><a routerLink="/about">About</a></li>
                  <li><a routerLink="/tasks">Tasks</a></li>
                  <li><a routerLink="/contact">Contact</a></li>
              </ul>
          </div>
      </div>
  </nav>
</header>  `
})
export class HeaderComponent {

}
