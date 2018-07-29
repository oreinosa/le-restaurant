import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'products', loadChildren: './products/products.module#ProductsModule' },
      { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
      { path: 'combos', loadChildren: './combos/combos.module#CombosModule' },
      { path: '', pathMatch: 'full', redirectTo: 'users' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
