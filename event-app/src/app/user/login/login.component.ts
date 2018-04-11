import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('userName') userName: NgModel;

  public userInfo = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  public submitLoginForm(formValue) {
    console.log(this.userName);
    this.authService.loginUser(formValue);
    // this.router.navigate(['/events']);
  }

  public cancel() {
    this.router.navigate(['/events']);
  }

}
