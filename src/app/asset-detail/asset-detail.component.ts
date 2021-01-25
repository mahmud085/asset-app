import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Asset } from './../assest';
import { AssetService } from './../asset.service';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  asset: Asset;
  constructor(private route: ActivatedRoute, private assetService: AssetService, private location: Location) { }

  ngOnInit(): void {
    this.getAsset();
  }
  
  getAsset(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.assetService.getAsset(id)
      .subscribe(asset => this.asset = asset);
  }

  goBack(): void {
    this.location.back();
  }

}
