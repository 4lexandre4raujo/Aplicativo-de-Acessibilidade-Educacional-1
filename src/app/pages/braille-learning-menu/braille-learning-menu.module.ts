import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrailleLearningMenuPageRoutingModule } from './braille-learning-menu-routing.module';

import { BrailleLearningMenuPage } from './braille-learning-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrailleLearningMenuPageRoutingModule
  ],
  declarations: [BrailleLearningMenuPage]
})
export class BrailleLearningMenuPageModule {}
