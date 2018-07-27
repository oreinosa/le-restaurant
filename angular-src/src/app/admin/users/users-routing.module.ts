import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
      { path: 'edit/:username', component: EditComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'delete/:username', component: DeleteComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
