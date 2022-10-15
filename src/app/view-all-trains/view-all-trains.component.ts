import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-trains',
  templateUrl: './view-all-trains.component.html',
  styleUrls: ['./view-all-trains.component.css']
})
export class ViewAllTrainsComponent implements OnInit {

  constructor() { }
  name="Kishore"
  read=()=>{
    this.name="raju"
  }

  ngOnInit(): void {
  }

}
