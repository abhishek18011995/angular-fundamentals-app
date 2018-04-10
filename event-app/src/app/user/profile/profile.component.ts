import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userInfoForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.createProfileForm();
  }

  public createProfileForm() {
    this.userInfoForm = new FormGroup({
      firstName: new FormControl(this.authService.currentUser.firstName, {
        validators: Validators.required,
      }),
      lastName: new FormControl(this.authService.currentUser.lastName)
    }, { updateOn: 'blur' });
  }

  public saveUserInfo(value) {
    console.log(this.userInfoForm);
    this.authService.updateUser(value);
    // this.router.navigate(['/events']);
  }

  public cancel() {
    this.router.navigate(['/events']);
  }

}
