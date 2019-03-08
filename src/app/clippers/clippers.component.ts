import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-clippers',
  templateUrl: './clippers.component.html',
  styleUrls: ['./clippers.component.scss']
})
export class ClippersComponent implements OnInit {

  players: any
  teamId: number = 17
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }
}
