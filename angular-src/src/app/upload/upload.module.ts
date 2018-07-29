import { UploadService } from './upload.service';
import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [UploadComponent],
  exports: [UploadComponent],
  providers: [UploadService]
})
export class UploadModule { }
