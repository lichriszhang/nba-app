import { MatchComponent } from './nba/match/match.component';
import { NbaComponent } from './nba/nba.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LakersComponent } from './lakers/lakers.component';
import { RocketsComponent } from './rockets/rockets.component';
import { BucksComponent } from './bucks/bucks.component';
import { CelticComponent } from './celtic/celtic.component';

const routes: Routes = [
  {
    path: 'nba', component: NbaComponent, children: [
      {
        path: '', component: MatchComponent
      }
    ]
  },
  {
    path: 'lakers', component: LakersComponent
  },
  {
    path: 'rocket', component: RocketsComponent
  },
  {
    path: 'bucks', component: BucksComponent
  },
  {
    path: 'celtic', component: CelticComponent
  }, {
    path: '**', component: NbaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
