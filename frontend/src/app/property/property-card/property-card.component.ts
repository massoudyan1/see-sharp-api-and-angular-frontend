import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})


export class PropertyCardComponent implements OnInit {


  @Input() property_id: any;
  @Input() property_name: any;
  @Input() property_type: any;
  @Input() property_price: any;
  @Input() property_img: any;

  Property: any = {
    "Id": "",
    "Name": "",
    "Type": "",
    "Price": "",
    "Img": ""
  };
  constructor() { }

  ngOnInit(): void {
    this.Property.Id = this.property_id;
    this.Property.Name = this.property_name;
    this.Property.Type = this.property_type;
    this.Property.Price = this.property_price;
    this.Property.Img = this.property_price;
  }

}
