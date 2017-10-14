import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatDialogModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSliderModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  declarations: []
})

export class MaterialModule { }
