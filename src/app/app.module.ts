import { TeamsService } from './service/teams.service';
import { RocketsComponent } from './rockets/rockets.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LakersComponent } from './lakers/lakers.component';
import { BucksComponent } from './bucks/bucks.component';
import { CelticComponent } from './celtic/celtic.component';
import { FormsModule } from '@angular/forms';
import { NbaComponent } from './nba/nba.component';
import { MatchComponent } from './nba/match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    LakersComponent,
    BucksComponent,
    CelticComponent,
    RocketsComponent,
    NbaComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
