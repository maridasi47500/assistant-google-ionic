import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeSearchPage } from './make-search.page';

const routes: Routes = [
  {
    path: '',
    component: MakeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeSearchPageRoutingModule {}
