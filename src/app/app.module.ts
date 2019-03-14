import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultijoueursComponent } from './multijoueurs/multijoueurs.component';
import { JoinPartieComponent } from './join-partie/join-partie.component';
import { ResumePartieComponent } from './resume-partie/resume-partie.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { SoloMenuComponent } from './solo-menu/solo-menu.component';
import { CarteComponent } from './carte/carte.component';
import { PartieComponent } from './partie/partie.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { UsersComponent } from './users/users.component';
import { ServeurServices } from './service/serveur.services';
const appRoute: Routes = [
  {path: 'Home', component: MenuPageComponent },
  {path: 'join', component: JoinPartieComponent },
  {path: 'resume', component: ResumePartieComponent },
  {path: 'solo', component: SoloMenuComponent },
  {path: 'multijoueurs', component: MultijoueursComponent },
  {path: 'user', component: UsersComponent},
  {path: '', component: MenuPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MultijoueursComponent,
    JoinPartieComponent,
    ResumePartieComponent,
    MenuPageComponent,
    SoloMenuComponent,
    CarteComponent,
    PartieComponent,
    ParticipantListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    ServeurServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
