import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditSearchPageRoutingModule } from './edit-search-routing.module';

import { EditSearchPage } from './edit-search.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditSearchPageRoutingModule
  ],
  declarations: [EditSearchPage]
})
export class EditSearchPageModule {}
