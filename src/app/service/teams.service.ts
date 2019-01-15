import { HttpClient } from '@angular/common/http';
import { TEAMS } from './../teams';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams: any
  constructor(public http: HttpClient) { }

  public getAllInfo() {
    this.http.get('http://localhost:8080/teams/all').subscribe((data) => {
      this.teams = data
    })
    console.log(this.teams)
    return this.teams
  }

}
