import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, children: [
      { path: 'add', component: CreateComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'update/:_id', component: UpdateComponent },
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
