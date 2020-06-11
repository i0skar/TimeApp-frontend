import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.initializeLoginForm();
  }

  loginUser() {
    this.loginService.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      console.log(this.loginForm.value);
      // localStorage.setItem('token', res.token);
      // const decodedToken = jwt_decode(res.token);
      localStorage.setItem('email', this.loginForm.value.email);
      localStorage.setItem('status', res);
      this.router.navigateByUrl('/layout');
    });
  }

  private initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
}
