import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CombosRoutingModule } from './combos-routing.module';
import { CombosComponent } from './combos.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    SharedModule,
    CombosRoutingModule
  ],
  declarations: [CombosComponent, CreateComponent, UpdateComponent, ListComponent, DeleteComponent]
})
export class CombosModule { }
