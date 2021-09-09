import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value: string = "Data in Parent Component";
  dataFromChild !: string; 

  constructor() { }

  ngOnInit(): void {
  }

  receiveData(event: string) {
    this.dataFromChild = event;
    console.log(event);
  }

}
