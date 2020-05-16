import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Output() onButtonClick = new EventEmitter<any>();
  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(event) {
    this.onButtonClick.emit(event);
  }

}
