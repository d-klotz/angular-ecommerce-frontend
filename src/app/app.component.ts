import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-frontend';
  isOpen: boolean = false;

  closeSidebar() {
    this.isOpen = false;
  }

  openSidebar() {
    this.isOpen = true;
  }

}
