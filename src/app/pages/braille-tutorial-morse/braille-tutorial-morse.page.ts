import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-braille-tutorial-morse',
  templateUrl: './braille-tutorial-morse.page.html',
  styleUrls: ['./braille-tutorial-morse.page.scss'],
})
export class BrailleTutorialMorsePage implements OnInit {

  constructor(
    private router: Router,
  ) { 
    document.addEventListener('touchstart', this.onTouchStart.bind(this));
    document.addEventListener('touchend', this.onTouchEnd.bind(this));
  }
  msgBottomLeft = 'Voltar ou sair';
  msgBottomMiddle = 'Repetir leitura';
  msgBottomRight = 'Próximo';
  msgTopLeft = 'Menu aprendizagem';
  msgTopMiddle = 'Tabela alfanumérica';
  msgTopRight= 'Tentar novamente';
  navigator: any;

  ngOnInit() {
  }
  message = "Aprendendo os numerais do código Morse"
  onTouchStart() {
    navigator.vibrate([50, 100, 50]); // Vibração ao tocar na tela
  console.log("vibrou")
  }

  onTouchEnd() {
    navigator.vibrate(0); // Parar de vibrar ao remover o dedo da tela
  console.log("parou de vibrar")
  }
}
