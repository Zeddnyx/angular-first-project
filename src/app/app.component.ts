import { Component, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'angular-project';

  user: string = JSON.stringify(localStorage.getItem('username'));

  isMenu: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.user) {
      console.log('');
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngDoCheck() {
    let currentUrl = this.router.url;
    if (currentUrl === '/login') {
      this.isMenu = false;
    } else {
      this.isMenu = true;
    }
  }
}
