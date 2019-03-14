import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {
@Input() created_by: string;
@Input() created_at: string;
@Input() member = [{
  name : 'Rapha',
  surname: 'Ondobo'
},
{
  name : 'Rapha',
  surname: 'Ondobo'
},
{
  name : 'willy',
  surname: 'Djopa ..'
},
{
  name : 'Eugène',
  surname: 'Ebongue'
}];
  constructor() { }

  ngOnInit() {
  }

}
