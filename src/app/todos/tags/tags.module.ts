import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TagsComponent } from './tags.component';
import { TagsDisplayComponent } from './tags-display.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [TagsComponent, TagsDisplayComponent],
  exports: [TagsComponent, TagsDisplayComponent]
})
export class TagsModule { }
