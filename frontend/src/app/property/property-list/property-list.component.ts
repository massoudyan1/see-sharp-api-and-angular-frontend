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
  SellRent: number = 0;
  properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute ,private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString() == "rent-property"){
      console.log("vi er i rent-property")
      this.SellRent = 2;
    } if(this.route.snapshot.url.toString() == "home"){
      console.log("vi er i home")
      this.SellRent = 1;
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data =>{
        this.properties = data;
        console.log(data);
        // console.log(this.route.snapshot.url.toString());
      }, err =>{ console.log('httperror'); console.log(err.message); }
    )
  }

}
