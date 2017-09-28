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
  MdRadioModule
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
    MdRadioModule
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
    MdRadioModule
  ],
  declarations: []
})

export class MaterialModule { }
