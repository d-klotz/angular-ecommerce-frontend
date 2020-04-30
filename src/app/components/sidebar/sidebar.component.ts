import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/security/login/login.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faBars = faBars;
  isOpen: boolean;

  constructor(
    private loginService: LoginService,
    private observableService: ObservableService) { }

  ngOnInit(): void {
    this.observableService.isSidebarOpenChanged$.subscribe(status => {
      this.isOpen = status;
    })
  }

  handleOnIconClick() {
    this.observableService.handleSidebarOpenClose(true);
  }

  isUserLoggedIn() {
    return this.loginService.isUserLoggedIn();
  }

  getUserName() {
    return this.loginService.user.name;
  }

  handleOnMenuItemClick() {
    this.observableService.handleSidebarOpenClose(false);
  }
}
