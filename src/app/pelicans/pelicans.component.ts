import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-pelicans',
  templateUrl: './pelicans.component.html',
  styleUrls: ['./pelicans.component.scss']
})
export class PelicansComponent implements OnInit {

  players: any
  teamId: number = 28
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }
}
