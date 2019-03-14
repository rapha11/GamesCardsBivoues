import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {
  @Input() title: string;
  @Input() games: number;
  @Input() like: number;
  @Input() dislike: number;
  @Input() bgFooterColor  = '#25BE59';
  @Input() nextPage = 'join';

  constructor() {

   }

  ngOnInit() {
  }

}
