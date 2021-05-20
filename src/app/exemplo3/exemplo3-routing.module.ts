import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemplo3Page } from './exemplo3.page';

const routes: Routes = [
  {
    path: '',
    component: Exemplo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemplo3PageRoutingModule {}
