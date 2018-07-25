import { AuthService } from './../../auth/auth.service';
import { LogoutComponent } from './../../auth/logout/logout.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share, startWith, tap, take, filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  user: User;
  links: any[];
  actions: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private router: Router,
    private auth: AuthService
  ) {
    this.links = [
      // { label: 'Home', route: 'home', icon: 'home' },
    ];
    this.actions = [
      { label: 'Login', name: 'login', icon: 'person' },
      { label: 'Register', name: 'register', icon: 'person_add' },
    ];

    this.auth
      .user.pipe(
        take(1),
        filter(user => !!user),
        tap((user: User) => this.updateRouting(user.role)))
      .subscribe(user => this.user = user);

  }

  onAction(action: string) {
    let component;
    switch (action) {
      case "login":
        component = LoginComponent;
        break;
      case "register":
        component = RegisterComponent;
        break;
      case "logout":
        component = LogoutComponent;
        break;
      case "profile":
        return this.router.navigateByUrl(action);
    }
    let event = this.dialog
      .open(component, {
        width: '350px'
      });
    event
      .afterClosed()
      .subscribe(result => {
        if (result) {
          let role = 'not-logged-in';
          if (result.user) {
            role = result.user.role;
          }
          this.updateRouting(role);
        }
      });
  }

  private updateRouting(role: string) {
    console.log('Updating routing for ', role);
    let links: any[] = [];
    let actions: any[] = [];
    switch (role) {
      case "Admin":
        links.push(
          { label: 'Admin', route: 'admin', icon: 'build' },
        );
      case "Customer":
        actions.push(
          { label: 'Profile', name: 'profile', icon: 'person' },
          { label: 'Logout', name: 'logout', icon: 'exit_to_app' },
        );
        break;
      default:
        links.push(
          // { label: 'Home', route: 'home', icon: 'home' },
        );
        actions.push(
          { label: 'Login', name: 'login', icon: 'person' },
          { label: 'Register', name: 'register', icon: 'person_add' },
        );
    }
    this.links = links;
    this.actions = actions;
  }

}
