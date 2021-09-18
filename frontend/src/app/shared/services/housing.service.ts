import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { IProperty } from '../models/property.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HousingService {

  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const jsonData = JSON.stringify(data)
        const propertiesArray: Array<IProperty> = JSON.parse(jsonData);;
        return propertiesArray;
      })
    );
  }}
