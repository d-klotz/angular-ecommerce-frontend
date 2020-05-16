import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutProduct } from 'src/app/models/CheckoutProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  public order: Order;
  public orderProducts: CheckoutProduct[] = [];

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrder();
  }

  public getOrder() {
    const orderId = this.route.snapshot.params['id'];
    this.orderService.getOrderById(orderId).subscribe(res => {
      this.order = res.data;
      res.data.orderItems.forEach(item => {
        this.productService.getProductById(Number(item.productId)).subscribe(res => {
          const product: CheckoutProduct = new CheckoutProduct(
            res.id,
            res.name,
            res.description,
            res.mainImage,
            res.price,
            item.quantity
          );
          this.orderProducts.push(product);
        })
      })
    })
  }


  public goToProductDetail(productId: number) {
    this.router.navigate([`details/${productId}`])
  }

}
