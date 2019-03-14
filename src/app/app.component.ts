import { Component, Input, OnInit } from '@angular/core';
import { ServeurServices } from './service/serveur.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private serveur: ServeurServices) {


  }
}
