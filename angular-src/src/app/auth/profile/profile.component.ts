import { User } from './../../shared/classes/user';
import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  $user: Observable<User>;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.$user = this.auth.user;
  }

}
