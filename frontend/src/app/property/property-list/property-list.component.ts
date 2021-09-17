import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  Properties: any = [{
    "Id": 1,
    "Name": "Kame House",
    "Type": "House",
    "Price": 12000
  },
  {
    "Id": 2,
    "Name": "Goku House",
    "Type": "House",
    "Price": 30000
  },
  {
    "Id": 3,
    "Name": "Vegeta House",
    "Type": "House",
    "Price": 122000
  },
  {
    "Id": 4,
    "Name": "Bulma House",
    "Type": "Mainsion",
    "Price": 700000
  },

]
  constructor() { }

  ngOnInit(): void {
  }

}
