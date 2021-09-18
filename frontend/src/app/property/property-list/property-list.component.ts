import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/shared/models/property.model';
import { HousingService } from 'src/app/shared/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];

  constructor(private housingService: HousingService) {

  }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => data ? this.properties = data : console.log("Couldnt retrieve any data from" + arguments.callee.caller.toString()),
      err => console.log(err.message)
    )
  }

}
