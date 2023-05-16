import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrailleAlphabetBraillePageRoutingModule } from './braille-alphabet-braille-routing.module';

import { BrailleAlphabetBraillePage } from './braille-alphabet-braille.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrailleAlphabetBraillePageRoutingModule
  ],
  declarations: [BrailleAlphabetBraillePage]
})
export class BrailleAlphabetBraillePageModule {}
