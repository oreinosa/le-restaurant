import { ProductsService } from './products.service';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
