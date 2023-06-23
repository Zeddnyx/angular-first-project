import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './modules/profile/profile.component';
import { StartedComponent } from './modules/started/started.component';
import { AboutComponent } from './modules/about/about.component';
import { SingleComponent } from './modules/single/single.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomepageComponent,
  },
  { path: 'profile', title: 'Profile', component: ProfileComponent },
  { path: 'started', title: 'Started', component: StartedComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  {
    path: 'single-post/:id',
    title: 'Single Post',
    component: SingleComponent,
  },
  { path: '', redirectTo: '/started', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
