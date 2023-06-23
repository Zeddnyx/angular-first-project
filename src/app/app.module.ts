import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AboutComponent } from './modules/about/about.component';
import { StartedComponent } from './modules/started/started.component';
import { ReactiveFormsModule } from '@angular/forms';

// fetch
import { HttpClientModule } from '@angular/common/http';

import { SingleComponent } from './modules/single/single.component';
import { ButtonComponent } from './reusable/button/button.component';
import { CardComponent } from './reusable/card/card.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { LoginComponent } from './modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    AboutComponent,
    StartedComponent,
    SingleComponent,
    ButtonComponent,
    CardComponent,
    HomepageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
