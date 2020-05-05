import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailPattern } from 'src/app/utils/patterns';
import { PaymentMethod } from 'src/app/models/PaymentMethod';
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/Customer';
import { Profile } from 'src/app/models/Profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  newAccountForm: FormGroup;
  methods = [
    PaymentMethod.BANK_DEPOSIT,
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.PAYPAL,
  ]

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.newAccountForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(emailPattern)]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required]
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
      })
    }, {validators: this.checkPasswords});
  }

checkPasswords(form: FormGroup) { // here we have the 'passwords' group
  let pass = form.get('password').value;
  let confirmPassword = form.get('confirmPassword').value;

  return pass === confirmPassword ? null : { notSame: true }
}

  submit(form: FormGroup) {
    const customer: Customer = {
      name: form.controls['name'].value,
      address: form.controls['address'].value,
      number: form.controls['number'].value,
      mainPaymentMethod: form.controls['paymentMethod'].value,
      email: form.controls['email'].value,
      password: form.controls['password'].value,
      profile: Profile.ROLE_USER
    }

    this.loginService.createCustomer(customer)
      .subscribe(response => {
        if(response.errors.length === 0) {
          this.loginService.login(customer.email, customer.password)
            .subscribe(() => {
              this.router.navigate(['/']);
            });
        }
      });
  }
}
