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

  Property: any = {
    "Id": "",
    "Name": "",
    "Type": "",
    "Price": "",
  };
  constructor() { }

  ngOnInit(): void {
    console.log('id: ' + this.property_id)
    this.Property.Id = this.property_id;
    this.Property.Name = this.property_name;
    this.Property.Type = this.property_type;
    this.Property.Price = this.property_price;
    console.log(this.Property.Id)
  }

}
