import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-nuggets',
  templateUrl: './nuggets.component.html',
  styleUrls: ['./nuggets.component.scss']
})
export class NuggetsComponent implements OnInit {

  players: any
  teamId: number = 16
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }
}
