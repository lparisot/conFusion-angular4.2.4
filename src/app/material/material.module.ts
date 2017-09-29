import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule,
  MdListModule,
  MdDialogModule,
  MdCheckboxModule,
  MdInputModule,
  MdRadioModule,
  MdSlideToggleModule,
  MdSelectModule,
  MdProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdListModule,
    MdDialogModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSlideToggleModule,
    MdSelectModule,
    MdProgressSpinnerModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdListModule,
    MdDialogModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSlideToggleModule,
    MdSelectModule,
    MdProgressSpinnerModule
  ],
  declarations: []
})

export class MaterialModule { }
