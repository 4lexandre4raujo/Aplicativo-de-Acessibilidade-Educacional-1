import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrailleTutorialBraillePage } from './braille-tutorial-braille.page';

const routes: Routes = [
  {
    path: '',
    component: BrailleTutorialBraillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrailleTutorialBraillePageRoutingModule {}
