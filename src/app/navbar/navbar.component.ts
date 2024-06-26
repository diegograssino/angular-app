import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `<nav>
    <img
      src="https://p1.hiclipart.com/preview/630/550/562/metrostation-black-home-icon-png-clipart-thumbnail.jpg"
      alt=""
      class="nav--logo"
    />
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>`,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
