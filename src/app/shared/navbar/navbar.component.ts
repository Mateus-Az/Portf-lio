import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public showMenu() {
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.links');

    menu?.classList.toggle('bx-x');
    navlist?.classList.toggle('open');

  }
}
