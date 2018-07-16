import { LogoutComponent } from './../../auth/logout/logout.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  user: any;
  links: any[];
  actions: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.updateRouting('');
  }

  signOut() {
    // this.auth.signOut();
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
    }
    let event = this.dialog.open(component);
    event
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.router.navigate(['']);
          let role = '';
          if (result.user) {
            role = result.user.role;
          }
          this.updateRouting(role);
        }
      });
  }

  private updateRouting(role: string) {
    console.log('Updating routing for ', role);
    let links: any[];
    let actions: any[];
    switch (role) {
      case "Customer":
        actions = [
          { label: 'Logout', name: 'logout', icon: 'exit_to_app' },
        ];
        break;
      default:
        links = [
          // { label: 'Home', route: 'home', icon: 'home' },
        ];
        actions = [
          { label: 'Login', name: 'login', icon: 'person' },
          { label: 'Register', name: 'register', icon: 'person_add' },
        ];
    }
    this.links = links;
    this.actions = actions;
  }

}
