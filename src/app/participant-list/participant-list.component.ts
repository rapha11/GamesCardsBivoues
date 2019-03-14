import { Component, OnInit, Input } from '@angular/core';
import * as io from 'socket.io-client'
@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {
  @Input() name: string;
  @Input() surname: string;
  @Input() id: number;
  socket;
  numberOnlieUsers: number;

  constructor() {
      this.socket = io();

   }

  public ngOnInit():void {
    this.socket.on('numberOnlieUsers', (numberOnlieUsers) => {
      this.numberOnlieUsers =  numberOnlieUsers;
    });
  }

}
