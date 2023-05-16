import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrailleAlphabetBraillePage } from './braille-alphabet-braille.page';

const routes: Routes = [
  {
    path: '',
    component: BrailleAlphabetBraillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrailleAlphabetBraillePageRoutingModule {}
