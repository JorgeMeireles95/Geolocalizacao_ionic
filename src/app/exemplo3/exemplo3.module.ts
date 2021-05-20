import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemplo3PageRoutingModule } from './exemplo3-routing.module';

import { Exemplo3Page } from './exemplo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemplo3PageRoutingModule
  ],
  declarations: [Exemplo3Page]
})
export class Exemplo3PageModule {}
