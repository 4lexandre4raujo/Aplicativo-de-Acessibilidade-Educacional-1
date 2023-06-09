import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrailleTutorialBorderButtonPage } from './braille-tutorial-border-button.page';

const routes: Routes = [
  {
    path: '',
    component: BrailleTutorialBorderButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrailleTutorialBorderButtonPageRoutingModule {}
