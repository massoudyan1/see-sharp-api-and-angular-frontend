import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { HousingService } from 'src/app/shared/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  propertyAmount: number = 0;

  private _propertyId: number = 0;



  public get propertyId() : number {
    return this._propertyId;
  }
  public set propertyId(v : number) {
    this._propertyId = v;
  }

  constructor(private route: ActivatedRoute, private router: Router,private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);


    this.housingService.getAllProperties().subscribe( data => this.propertyAmount = data.length );

  }
  onSelectNext() {
    if(Number(this.route.snapshot.params['id']) <= this.propertyAmount-1){
      this.router.navigate(['/property-detail/' + ++this.propertyId]);
    }
  }
  onSelectPrevious() {
    if(Number(this.route.snapshot.params['id']) >= 2){
      this.router.navigate(['/property-detail/' + --this.propertyId]);
    }
  }
}
