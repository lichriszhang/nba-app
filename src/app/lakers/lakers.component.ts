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
    this.players = this.playersService.getPlayerByTeam(this.teamId)
  }

  ngOnInit() {
    setTimeout(() => {
      this.players = this.playersService.getPlayerByTeam(this.teamId)
    }, 1000);
    console.log(this.players)
  }

}
