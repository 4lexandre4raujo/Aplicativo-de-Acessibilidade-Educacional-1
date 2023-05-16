import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrailleTalkBoardPage } from './braille-talk-board.page';

const routes: Routes = [
  {
    path: '',
    component: BrailleTalkBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrailleTalkBoardPageRoutingModule {}
