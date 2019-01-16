import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  playerNumber: number
  teamId: number
  playerDetail: any
  constructor(public http: HttpClient, public routerInfo: ActivatedRoute) {}

  ngOnInit() {
    setTimeout(() => {
      this.routerInfo.params.subscribe((data) => {
        this.playerNumber = data['playerNumber']
        this.teamId = data['teamId']
      })
      this.playerDetail = this.getPlayerById(this.playerNumber, this.teamId)
    }, 1000);
  }

  getPlayerById(pid: number, tid: number) {
    const searchURL: string = 'http://localhost:8080/players/number/' + pid + '/' + tid
    setTimeout(() => {
      this.http.get(searchURL).subscribe((data) => {
        this.playerDetail = data
      })
    }, 100);
    console.log(this.playerDetail)
  }
}
