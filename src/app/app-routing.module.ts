import { ClippersComponent } from './clippers/clippers.component';
import { HeatComponent } from './heat/heat.component';
import { BlazersComponent } from './blazers/blazers.component';
import { PacersComponent } from './pacers/pacers.component';
import { SixersComponent } from './sixers/sixers.component';
import { PelicansComponent } from './pelicans/pelicans.component';
import { SpursComponent } from './spurs/spurs.component';
import { NuggetsComponent } from './nuggets/nuggets.component';
import { WarrionComponent } from './warrion/warrion.component';
import { MatchComponent } from './nba/match/match.component';
import { NbaComponent } from './nba/nba.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LakersComponent } from './lakers/lakers.component';
import { RocketsComponent } from './rockets/rockets.component';
import { BucksComponent } from './bucks/bucks.component';
import { CelticComponent } from './celtic/celtic.component';
import { RaptorsComponent } from './raptors/raptors.component';
import { ThunderComponent } from './thunder/thunder.component';
import { TimberwolvesComponent } from './timberwolves/timberwolves.component';

const routes: Routes = [
  {
    path: 'nba', component: NbaComponent, children: [
      {
        path: '', component: MatchComponent
      }
    ]
  },
  {
    path: 'lakers', component: LakersComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },
  {
    path: 'rocket', component: RocketsComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },
  {
    path: 'bucks', component: BucksComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },
  {
    path: 'celtic', component: CelticComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  }, 
  {
    path: 'warrion', component: WarrionComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },
  {
    path: 'raptors', component: RaptorsComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  }, 
  {
    path: 'nuggets', component: NuggetsComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },   
  {
    path: 'thunder', component: ThunderComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: 'spurs', component: SpursComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: 'pelicans', component: PelicansComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: '76ers', component: SixersComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: 'timberwolves', component: TimberwolvesComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: 'pacers', component: PacersComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: 'blazers', component: BlazersComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: 'heat', component: HeatComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  },  
  {
    path: 'clippers', component: ClippersComponent, children: [
      {
        path: ':playerNumber/:teamId', component: MatchComponent
      }
    ]
  }, 
  {
    path: '**', component: NbaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
