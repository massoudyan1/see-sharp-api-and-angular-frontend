import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/shared/models/property.model';
import { HousingService } from 'src/app/shared/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  SellRent: number = 1;
  properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute ,private housingService: HousingService) {

  }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data =>{
        this.properties = data;
        console.log(data);
      }, err => console.log(err.message)
    )
  }

}
