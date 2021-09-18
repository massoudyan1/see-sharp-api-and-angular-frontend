import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {


  private _propertyId: number = 0;
  public get propertyId() : number {
    return this._propertyId;
  }
  public set propertyId(v : number) {
    this._propertyId = v;
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
  }
  onSelectNext() {
    this.router.navigate(['/property-detail/' + ++this.propertyId]);

  }
  onSelectPrevious() {
    this.router.navigate(['/property-detail/' + --this.propertyId]);

  }
}
