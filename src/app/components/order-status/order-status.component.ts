import { Component, OnInit, Input } from '@angular/core';
import { OrderStatus } from 'src/app/models/OrderStatus';
import { faShoppingBag, faCheckCircle, faTruckMoving, faClipboardList, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  public faClipboardList = faClipboardList;
  public faClipboardCheck = faClipboardCheck;
  public faCheckCircle = faCheckCircle;
  public faTruckMoving = faTruckMoving;
  public counts = [
    OrderStatus.PROCESSING,
    OrderStatus.APROVED,
    OrderStatus.IN_TRANSIT,
    OrderStatus.DELIVERED
  ];

  @Input() currentStatus = 'PROCESSING';

  constructor() { }

  ngOnInit(): void {
  }


}
