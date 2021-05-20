import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemplo2Page } from './exemplo2.page';

const routes: Routes = [
  {
    path: '',
    component: Exemplo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemplo2PageRoutingModule {}
