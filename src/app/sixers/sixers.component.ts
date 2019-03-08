import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-sixers',
  templateUrl: './sixers.component.html',
  styleUrls: ['./sixers.component.scss']
})
export class SixersComponent implements OnInit {

  players: any
  teamId: number = 7
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }
}
