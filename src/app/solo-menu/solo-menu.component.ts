import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-menu',
  templateUrl: './solo-menu.component.html',
  styleUrls: ['./solo-menu.component.scss']
})
export class SoloMenuComponent implements OnInit {

  cartes = [
    {
      title : 'Solitaire',
      games : 500,
      like : 320,
      dislike : 329,
      bgFooterColor: '#25BE59',
      nextPage: 'jeuDirect'
  }];

  constructor() { }

  ngOnInit() {
  }

}
