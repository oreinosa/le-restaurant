import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, children: [
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
      { path: 'edit/:_id', component: EditComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'delete/:_id', component: DeleteComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
