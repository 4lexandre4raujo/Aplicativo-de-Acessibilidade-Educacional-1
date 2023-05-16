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
  ) { }
  msgBottomLeft = 'Voltar ou sair';
  msgBottomMiddle = 'Repetir leitura';
  msgBottomRight = 'Próximo';
  msgTopLeft = 'Menu aprendizagem';
  msgTopMiddle = 'Tabela alfanumérica';
  msgTopRight= 'Tentar novamente';
  
  ngOnInit() {
  }
  message = "Aprendendo uso dos botões laterais"
}