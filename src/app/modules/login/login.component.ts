import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../core/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }

  onSubmit(): void {
    localStorage.setItem('username', this.username?.value);
    this.router.navigate(['']);
  }
}
