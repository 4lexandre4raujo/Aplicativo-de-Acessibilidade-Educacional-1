import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-braille-alphabet-braille',
  templateUrl: './braille-alphabet-braille.page.html',
  styleUrls: ['./braille-alphabet-braille.page.scss'],
})
export class BrailleAlphabetBraillePage implements OnInit {

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
