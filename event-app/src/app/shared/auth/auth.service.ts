import { Injectable } from '@angular/core';
import { IUser } from '../../models/user.model';

@Injectable()
export class AuthService {

  public currentUser: IUser = {
    id: undefined,
    userName: undefined,
    firstName: undefined,
    lastName: undefined,
  };

  constructor() { }

  public loginUser(loginInfo) {
    this.currentUser.id = 1111;
    this.currentUser.userName = loginInfo.userName;
    this.currentUser.firstName = 'Abhishek';
    this.currentUser.lastName = 'Kumar';
  }

  public isAuthenticated() {
    return !!this.currentUser.userName;
  }

}
