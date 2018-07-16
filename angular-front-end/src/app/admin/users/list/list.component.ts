import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../../shared/classes/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions'];
  users: User[];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((res: any) => this.users = res.success ? res.users : []);
  }

}
