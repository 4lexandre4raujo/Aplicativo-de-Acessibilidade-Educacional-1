import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'braille-learning-menu',
    loadChildren: () => import('./pages/braille-learning-menu/braille-learning-menu.module').then( m => m.BrailleLearningMenuPageModule)
  },
  {
    path: 'braille-tutorial-border-button',
    loadChildren: () => import('./pages/braille-tutorial-border-button/braille-tutorial-border-button.module').then( m => m.BrailleTutorialBorderButtonPageModule)
  },
  {
    path: 'braille-talk-board',
    loadChildren: () => import('./pages/braille-talk-board/braille-talk-board.module').then( m => m.BrailleTalkBoardPageModule)
  },
  {
    path: 'braille-tutorial-braille',
    loadChildren: () => import('./pages/braille-tutorial-braille/braille-tutorial-braille.module').then( m => m.BrailleTutorialBraillePageModule)
  },
  {
    path: 'braille-alphabet-braille',
    loadChildren: () => import('./pages/braille-alphabet-braille/braille-alphabet-braille.module').then( m => m.BrailleAlphabetBraillePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
