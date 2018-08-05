import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSliderModule,
  MatIconModule,
  MatTabsModule,
  MatDialogModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CreateComponent } from './components/crud/create/create.component';
import { ListComponent } from './components/crud/list/list.component';
import { UpdateComponent } from './components/crud/update/update.component';
import { DeleteComponent } from './components/crud/delete/delete.component';
import { ViewImagePipe } from './pipes/view-image.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [
    CommonModule,
    CapitalizePipe,
    ViewImagePipe,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  declarations: [
    CapitalizePipe,
    ViewImagePipe,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    DeleteComponent,
  ],
})
export class SharedModule { }
