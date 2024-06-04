import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MakeSearchPageRoutingModule } from './make-search-routing.module';

import { MakeSearchPage } from './make-search.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeSearchPageRoutingModule
  ],
  declarations: [MakeSearchPage]
})
export class MakeSearchPageModule {}
