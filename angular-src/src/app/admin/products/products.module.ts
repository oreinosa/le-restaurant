import { UploadModule } from './../../upload/upload.module';
import { ProductsService } from './products.service';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    UploadModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ListComponent
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
