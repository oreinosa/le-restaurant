import { Component, OnInit } from "@angular/core";
import { User } from "../../../shared/classes/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { map, filter, tap, switchMap } from "rxjs/operators";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get("id")),
        filter(id => !!id),
        tap(id => (!!id ? false : this.router.navigate(["../"]))),
        switchMap(
          id =>
            this.usersService.isUserSelected
              ? this.usersService.getSelectedUser()
              : this.usersService.getUser(id)
        ),
        tap(user => console.log(user))
      )
      .subscribe(user => (this.user = user));
  }

  onSubmit(form) {
    console.log(form.value);
  }
}
