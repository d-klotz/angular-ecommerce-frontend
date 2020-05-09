import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quantity-controller',
  templateUrl: './quantity-controller.component.html',
  styleUrls: ['./quantity-controller.component.scss']
})
export class QuantityControllerComponent implements OnInit {

  @Input() showTrashIcon: boolean;
  @Output() decreaseClick = new EventEmitter<any>();
  @Output() increaseClick = new EventEmitter<any>();

  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;
  faTrash = faTrash;
  innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  onDecreaseClick(event) {
    this.decreaseClick.emit(event);
  }

  onIncreaseClick(event) {
    this.increaseClick.emit(event)
  }

}
