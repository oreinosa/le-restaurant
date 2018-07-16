import { UsersService } from './users.service';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
