import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  customer: Customer;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomerInformation();
  }

  getCustomerInformation() {
    this.loginService.getUserByToken().subscribe(res => {
      this.customer = res.data;
    })
  }

  goToEditInformation() {
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }

}
