import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrailleTalkBoardPageRoutingModule } from './braille-talk-board-routing.module';

import { BrailleTalkBoardPage } from './braille-talk-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrailleTalkBoardPageRoutingModule
  ],
  declarations: [BrailleTalkBoardPage]
})
export class BrailleTalkBoardPageModule {}
