import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-braille-talk-board',
  templateUrl: './braille-talk-board.page.html',
  styleUrls: ['./braille-talk-board.page.scss'],
})
export class BrailleTalkBoardPage {

  constructor(
    private router: Router,
  ) { }

  brailleTalkBoard(){
    
  }
  text = 'Olá, eu sou o Pedro, e irei apresentar para você o sistema de leitura e escrita Braille. Este sistema foi criado para pessoas com deficiência visual como você e eu, para isso, iremos utilizar apenas as nossas mãos para ler e entender o que esta escrito em materias que possuem o sistema Braille.'
  buttonWord = '<<Tocar tela>>'
  buttonNext(){
    this.text = 'Antes de começar-mos, peço que você segure o celular ou tablet com as suas duas mãos. A partir de agora, você sozinho com a ajuda de um responsável, irá aprender a usar o aplicativo, e em seguida, a minha amiga Ana Clara vai ensinar você a entender atraves do arraste de seus dedos na tela, o sistema Braille. Vamos começar?'
    this.buttonWord = 'Tocar tela'
    
  }
}