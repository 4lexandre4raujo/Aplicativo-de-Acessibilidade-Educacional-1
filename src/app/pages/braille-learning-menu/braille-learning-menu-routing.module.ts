import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrailleLearningMenuPage } from './braille-learning-menu.page';

const routes: Routes = [
  {
    path: '',
    component: BrailleLearningMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrailleLearningMenuPageRoutingModule {}
