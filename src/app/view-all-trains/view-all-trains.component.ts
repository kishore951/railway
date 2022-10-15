import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-trains',
  templateUrl: './view-all-trains.component.html',
  styleUrls: ['./view-all-trains.component.css']
})
export class ViewAllTrainsComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.railway().subscribe(
      (data)=>{
        this.viewTrainlist=data
      }
    )
    
  }
viewTrainlist:any=[]
  

  ngOnInit(): void {
  }

}
