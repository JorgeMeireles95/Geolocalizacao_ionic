import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemplo1PageRoutingModule } from './exemplo1-routing.module';

import { Exemplo1Page } from './exemplo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemplo1PageRoutingModule
  ],
  declarations: [Exemplo1Page]
})
export class Exemplo1PageModule {}
