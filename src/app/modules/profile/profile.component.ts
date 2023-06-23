import { Component, OnInit, signal } from '@angular/core';
import { user } from '../../core/store/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = user;
  name: string = JSON.stringify(localStorage.getItem('username'));

  username = signal<string>('');

  ngOnInit() {
    this.username.set(this.name);

    this.user.set({
      loggedIn: true,
      name: this.name,
      email: "s8j8X@example.com"
    })
  }
}
