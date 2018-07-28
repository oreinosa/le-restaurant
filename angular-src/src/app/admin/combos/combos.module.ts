import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombosRoutingModule } from './combos-routing.module';
import { CombosComponent } from './combos.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    CombosRoutingModule
  ],
  declarations: [CombosComponent, CreateComponent, UpdateComponent, ListComponent, DeleteComponent]
})
export class CombosModule { }
