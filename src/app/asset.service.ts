import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';
import { Asset } from './assest';
import { data } from '../app/mock-assests';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }
  
  getAsstes(): Observable<Asset[]> {
    return of(data);
  }
  
  getAsset(id: number): Observable<Asset> {
    return of(data.find(asset => asset.id == id));
  }
}
