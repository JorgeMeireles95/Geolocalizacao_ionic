import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemplo2PageRoutingModule } from './exemplo2-routing.module';

import { Exemplo2Page } from './exemplo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemplo2PageRoutingModule
  ],
  declarations: [Exemplo2Page]
})
export class Exemplo2PageModule {}
