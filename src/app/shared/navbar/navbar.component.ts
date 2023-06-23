import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() isMenu!: boolean;

  user: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.user = JSON.stringify(localStorage.getItem('username'));
  }

  logout() {
    localStorage.removeItem('username');
    this.route.navigate(['/login']);
  }
}
