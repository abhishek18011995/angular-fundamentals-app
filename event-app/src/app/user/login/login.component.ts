import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userInfo = {
    userName: 'aaaa',
    password: 'aaaa'
  };

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  public submitLoginForm(formValue) {
    // console.log(formValue);
    this.authService.loginUser(formValue);
    this.router.navigate(['/events']);
  }

  public cancel() {
    this.router.navigate(['/events']);
  }

}
