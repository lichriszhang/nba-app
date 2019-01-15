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
import { WarrionComponent } from './warrion/warrion.component';
import { RaptorsComponent } from './raptors/raptors.component';
import { NuggetsComponent } from './nuggets/nuggets.component';
import { ThunderComponent } from './thunder/thunder.component';
import { SpursComponent } from './spurs/spurs.component';
import { PelicansComponent } from './pelicans/pelicans.component';
import { SixersComponent } from './sixers/sixers.component';
import { TimberwolvesComponent } from './timberwolves/timberwolves.component';
import { PacersComponent } from './pacers/pacers.component';
import { BlazersComponent } from './blazers/blazers.component';
import { HeatComponent } from './heat/heat.component';
import { ClippersComponent } from './clippers/clippers.component';

@NgModule({
  declarations: [
    AppComponent,
    LakersComponent,
    BucksComponent,
    CelticComponent,
    RocketsComponent,
    NbaComponent,
    MatchComponent,
    WarrionComponent,
    RaptorsComponent,
    NuggetsComponent,
    ThunderComponent,
    SpursComponent,
    PelicansComponent,
    SixersComponent,
    TimberwolvesComponent,
    PacersComponent,
    BlazersComponent,
    HeatComponent,
    ClippersComponent
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
