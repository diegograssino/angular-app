import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  template: `<app-navbar></app-navbar><app-home></app-home>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
}
