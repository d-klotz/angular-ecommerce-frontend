import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faBars = faBars;
  @Output() onIconClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  handleOnIconClick() {
    this.onIconClick.emit();
  }
}
