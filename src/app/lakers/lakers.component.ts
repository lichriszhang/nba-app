import { PlayersService } from './../service/players.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lakers',
  templateUrl: './lakers.component.html',
  styleUrls: ['./lakers.component.scss']
})
export class LakersComponent implements OnInit {

  players: any
  teamId: number = 1
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }

  
}
