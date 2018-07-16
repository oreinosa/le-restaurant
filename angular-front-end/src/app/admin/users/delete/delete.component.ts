import { UsersService } from './../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  id: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    // private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.route
      .paramMap.pipe(
        map(params => params.get('id')),
        tap(id => !!id ? false : this.router.navigate(['../'])),
        filter(id => !!id))
      .subscribe(id => this.id = id);
  }

  onSubmit() {
    this.usersService.deleteUser(this.id)
      .subscribe((res:any) => {
        if(res.success){
          // this.no
        }
      }, e => console.log(e));
  }

}
