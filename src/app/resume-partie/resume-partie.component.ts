import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-partie',
  templateUrl: './resume-partie.component.html',
  styleUrls: ['./resume-partie.component.scss']
})
export class ResumePartieComponent implements OnInit {

  participants = [
    {
      id: 1,
      name: 'Rapha',
      surname: 'Ondobo'
     },
     {
      id: 2,
      name: 'Martin',
      surname: 'Ondobo'
     },
     {
      id: 3,
      name: 'Willy',
      surname: 'Djopa'
     }
];


  constructor() { }

  ngOnInit() {
  }

}
