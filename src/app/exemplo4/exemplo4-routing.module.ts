import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemplo4Page } from './exemplo4.page';

const routes: Routes = [
  {
    path: '',
    component: Exemplo4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemplo4PageRoutingModule {}
