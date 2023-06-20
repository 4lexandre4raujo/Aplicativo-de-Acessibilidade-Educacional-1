import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrailleTutorialMorsePage } from './braille-tutorial-morse.page';

const routes: Routes = [
  {
    path: '',
    component: BrailleTutorialMorsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrailleTutorialMorsePageRoutingModule {}
