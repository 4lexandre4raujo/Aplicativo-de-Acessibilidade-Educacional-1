import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrailleTutorialBorderButtonPageRoutingModule } from './braille-tutorial-border-button-routing.module';

import { BrailleTutorialBorderButtonPage } from './braille-tutorial-border-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrailleTutorialBorderButtonPageRoutingModule
  ],
  declarations: [BrailleTutorialBorderButtonPage]
})
export class BrailleTutorialBorderButtonPageModule {}
