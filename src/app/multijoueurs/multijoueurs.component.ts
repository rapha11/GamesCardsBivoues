import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multijoueurs',
  templateUrl: './multijoueurs.component.html',
  styleUrls: ['./multijoueurs.component.scss']
})
export class MultijoueursComponent implements OnInit {
  cartes_mul = [
    {
      title : 'Check & games',
      games : 500,
      like : 10,
      dislike : 100,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    },
    {
      title : 'Le mensonge',
      games : 500,
      like : 56,
      dislike : 0,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    },
    {
      title : 'Le marche',
      games : 50,
      like : 40,
      dislike : 10,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    },
    {
      title : 'Cochon graté',
      games : 1500,
      like : 500,
      dislike : 100,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    },
    {
      title : 'Pokers',
      games : 4500,
      like : 10,
      dislike : 100,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    },
    {
      title : 'Pokers',
      games : 4500,
      like : 10,
      dislike : 100,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    },
    {
      title : 'Pokers',
      games : 4500,
      like : 10,
      dislike : 100,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    },
    {
      title : 'Pokers',
      games : 4500,
      like : 10,
      dislike : 100,
      bgFooterColor : '#C037C0',
      nextPage: 'join'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
