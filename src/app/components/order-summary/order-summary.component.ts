import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.onClick.emit();
  }

}
