import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'braille-alphabet-braille',
    loadChildren: () => import('./pages/braille-alphabet-braille/braille-alphabet-braille.module').then( m => m.BrailleAlphabetBraillePageModule)
  },
  {
    path: 'braille-tutorial-morse',
    loadChildren: () => import('./pages/braille-tutorial-morse/braille-tutorial-morse.module').then( m => m.BrailleTutorialMorsePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
