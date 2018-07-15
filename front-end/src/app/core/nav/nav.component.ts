import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share, startWith } from 'rxjs/operators';

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
  ) {
    this.links = [
      { label: 'Home', route: 'home', icon: 'home' },
    ];
    this.actions = [
      { label: 'Login', route: 'login', icon: 'person' },
      { label: 'Register', route: 'register', icon: 'person_add' },
    ];
  }

  signOut() {
    // this.auth.signOut();
  }

}
