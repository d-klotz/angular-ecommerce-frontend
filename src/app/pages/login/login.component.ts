import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern } from 'src/app/utils/patterns';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(emailPattern)]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  submit(loginForm: FormGroup) {
    console.log(loginForm);
    this.loginService.login(
      loginForm.controls['email'].value, loginForm.controls['password'].value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
