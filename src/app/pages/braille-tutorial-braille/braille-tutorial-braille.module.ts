import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrailleTutorialBraillePageRoutingModule } from './braille-tutorial-braille-routing.module';

import { BrailleTutorialBraillePage } from './braille-tutorial-braille.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrailleTutorialBraillePageRoutingModule
  ],
  declarations: [BrailleTutorialBraillePage]
})
export class BrailleTutorialBraillePageModule {}
