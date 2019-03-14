import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-partie',
  templateUrl: './join-partie.component.html',
  styleUrls: ['./join-partie.component.scss']
})
export class JoinPartieComponent implements OnInit {
rulesGame = 'Le check & games est un jeu de carte très populaire au cameroun. Pour commencer, un donneur ...';

parties = [{
  created_by: 'Raphael',
  created_at: '4:26 PM',
  party_member: [{
    name : 'Rapha',
    surname: 'Ondobo'
  },
  {
    name : 'Mon Super test',
    surname: 'Ondobo'
  },
  {
    name : 'willy',
    surname: 'Djopa ..'
  },
  {
    name : 'Eugène',
    surname: 'Ebongue'
  }]
},
{
  created_by: 'Raphael',
  created_at: '4:26 PM',
  party_member: [{
    name : 'Rapha',
    surname: 'Ondobo'
  },
  {
    name : 'Mon Super test',
    surname: 'Ondobo'
  },
  {
    name : 'willy',
    surname: 'Djopa ..'
  },
  {
    name : 'Eugène',
    surname: 'Ebongue'
  }]
},
{
  created_by: 'Raphael',
  created_at: '8:26 PM',
  party_member: [{
    name : 'Rapha',
    surname: 'Ondobo'
  },
  {
    name : 'Mon Super test',
    surname: 'Ondobo'
  },
  {
    name : 'willy',
    surname: 'Djopa ..'
  },
  {
    name : 'Eugène',
    surname: 'Ebongue'
  }]
}];
  constructor() { }

  ngOnInit() {
  }

}
