import { AuthService } from './../auth.service';
import { SignIn } from './../../shared/classes/sign-in';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signIn: SignIn;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.signIn = new SignIn();
  }

  onSubmit(signIn: SignIn) {
    this.auth.signIn(signIn)
      .subscribe((res: any) => {
        if (res.success) {
          this.auth.updateUserData(res.user, res.token);
        }
      });
  }

}
