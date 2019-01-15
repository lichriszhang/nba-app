import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lakers',
  templateUrl: './lakers.component.html',
  styleUrls: ['./lakers.component.scss']
})
export class LakersComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.jsonp("http://localhost:8080/teams", "teamId").subscribe((data) => {
      console.log(data)
    })
  }

}
