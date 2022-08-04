import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sched2Page } from './sched2.page';

const routes: Routes = [
  {
    path: '',
    component: Sched2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sched2PageRoutingModule {}
