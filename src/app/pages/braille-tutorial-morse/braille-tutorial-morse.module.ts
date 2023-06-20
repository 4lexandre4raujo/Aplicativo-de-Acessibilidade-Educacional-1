import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrailleTutorialMorsePageRoutingModule } from './braille-tutorial-morse-routing.module';

import { BrailleTutorialMorsePage } from './braille-tutorial-morse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrailleTutorialMorsePageRoutingModule
  ],
  declarations: [BrailleTutorialMorsePage]
})
export class BrailleTutorialMorsePageModule {}
