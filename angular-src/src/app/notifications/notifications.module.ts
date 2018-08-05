import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { NotificationsService } from './notifications.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [NotificationsComponent],
  exports: [NotificationsComponent],
  providers: [NotificationsService]
})
export class NotificationsModule { }
