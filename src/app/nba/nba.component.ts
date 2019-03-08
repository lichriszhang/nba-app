import { TEAMS } from './../teams';
import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../service/teams.service';

@Component({
  selector   : 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls  : ['./nba.component.scss']
})
export class NbaComponent implements OnInit {
  teams: any
  constructor(public teamsService: TeamsService) {
    this.teamsService.getAllInfo().subscribe((data) => {
      this.teams = data;
    });
   }

  ngOnInit() {
    
  }
}
