import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sched2PageRoutingModule } from './sched2-routing.module';

import { Sched2Page } from './sched2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sched2PageRoutingModule
  ],
  declarations: [Sched2Page]
})
export class Sched2PageModule {}
