import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemplo1Page } from './exemplo1.page';

const routes: Routes = [
  {
    path: '',
    component: Exemplo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemplo1PageRoutingModule {}
