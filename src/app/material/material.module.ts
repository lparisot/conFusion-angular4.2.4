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
  MdProgressSpinnerModule,
  MdSliderModule
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
    MdProgressSpinnerModule,
    MdSliderModule
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
    MdProgressSpinnerModule,
    MdSliderModule
  ],
  declarations: []
})

export class MaterialModule { }
