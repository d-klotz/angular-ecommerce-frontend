import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  public faDotCircle = faDotCircle;

  constructor(
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.orderService.getOrdersByUser().subscribe(res => {
      this.orders = res.data;
    });
  }

  public goToDetails(orderId) {
    this.router.navigate([`orders/${orderId}`], orderId);
  }
}
