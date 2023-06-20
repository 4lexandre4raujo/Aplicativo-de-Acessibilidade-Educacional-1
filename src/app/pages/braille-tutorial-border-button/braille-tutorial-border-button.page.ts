import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-braille-tutorial',
  templateUrl: './braille-tutorial-border-button.page.html',
  styleUrls: ['./braille-tutorial-border-button.page.scss'],
})
export class BrailleTutorialBorderButtonPage implements OnInit {

  constructor(
    private router: Router,
  ) { 
    document.addEventListener('touchstart', this.onTouchStart.bind(this));
    document.addEventListener('touchend', this.onTouchEnd.bind(this));
  }
  msgBottomLeft = 'Voltar ou sair';
  msgBottomRight = 'Próximo';
  msgTopLeft = 'Menu aprendizagem';
  msgTopMiddle = 'Tabela alfanumérica';
  msgTopRight= 'Tentar novamente';
  navigator: any;

  ngOnInit() {
  }
  message = "Aprendendo uso dos botões laterais"
  onTouchStart() {
    navigator.vibrate([50, 100, 50]); // Vibração ao tocar na tela
  console.log("Vibrando")
  }

  onTouchEnd() {
    navigator.vibrate(0); // Parar de vibrar ao remover o dedo da tela
  console.log("Parou de vibrar")
  }
}