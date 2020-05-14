import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentMethod } from 'src/app/models/PaymentMethod';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { emailPattern } from 'src/app/utils/patterns';
import { Customer } from 'src/app/models/Customer';
import { ShippingMethod } from 'src/app/models/ShippingMethod';
import { Order } from 'src/app/models/Order';
import { ObservableService } from 'src/app/services/observable.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  private customer: Customer;
  checkoutForm: FormGroup;
  paymentMethods = [
    PaymentMethod.BANK_DEPOSIT,
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.PAYPAL,
  ];
  shippingMethod = [
    ShippingMethod.CHEAPEST,
    ShippingMethod.FASTEST,
  ];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private observableService: ObservableService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(emailPattern)]
      }),
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      address: new FormControl('', {
        validators: [Validators.required]
      }),
      number: new FormControl('', {
        validators: [Validators.required]
      }),
      paymentMethod: new FormControl('', {
        validators: [Validators.required]
      }),
      shippingMethod: new FormControl('', {
        validators: [Validators.required]
      })
    });

    this.autoFillForm()
  }

  private autoFillForm() {
    this.loginService.getUserByToken().subscribe(res => {
      this.customer = res.data;
      this.checkoutForm.controls['email'].setValue(res.data.email);
      this.checkoutForm.controls['name'].setValue(res.data.name);
      this.checkoutForm.controls['address'].setValue(res.data.address);
      this.checkoutForm.controls['number'].setValue(res.data.number);
      this.checkoutForm.controls['paymentMethod'].setValue(res.data.mainPaymentMethod);
    });
  }

  public submit() {
    const order: Order = {
      customerId: this.customer.id,
      paymentMethod: this.checkoutForm.get('paymentMethod').value,
      shippingMethod: this.checkoutForm.get('shippingMethod').value,
      orderItems: this.orderService.getProductsToCheckout()
    }
    this.orderService.createOrder(order).subscribe(() => {
      this.observableService.cleanCart();
      this.router.navigate(['/thanks']);
    });
  }
}
