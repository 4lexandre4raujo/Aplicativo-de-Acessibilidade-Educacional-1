import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-braille-tutorial-braille',
  templateUrl: './braille-tutorial-braille.page.html',
  styleUrls: ['./braille-tutorial-braille.page.scss'],
})
export class BrailleTutorialBraillePage implements OnInit {

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
  message = "teste de toque"

}
