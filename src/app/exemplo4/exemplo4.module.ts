import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemplo4PageRoutingModule } from './exemplo4-routing.module';

import { Exemplo4Page } from './exemplo4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemplo4PageRoutingModule
  ],
  declarations: [Exemplo4Page]
})
export class Exemplo4PageModule {}
