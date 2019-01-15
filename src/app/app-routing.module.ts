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
  }, 
  {
    path: 'warrion', component: WarrionComponent
  },
  {
    path: 'raptors', component: RaptorsComponent
  }, 
  {
    path: 'nuggets', component: NuggetsComponent
  },   
  {
    path: 'thunder', component: ThunderComponent
  },  
  {
    path: 'spurs', component: SpursComponent
  },  
  {
    path: 'pelicans', component: PelicansComponent
  },  
  {
    path: '76ers', component: SixersComponent
  },  
  {
    path: 'timberwolves', component: TimberwolvesComponent
  },  
  {
    path: 'pacers', component: PacersComponent
  },  
  {
    path: 'blazers', component: BlazersComponent
  },  
  {
    path: 'heat', component: HeatComponent
  },  
  {
    path: 'clippers', component: ClippersComponent
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
