import { Component, OnInit } from '@angular/core';
import { Asset } from './../assest';
import { AssetService } from './../asset.service';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assets: Asset[] = [];
  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.getAssets();
  }
  
  getAssets(): void {
    this.assetService.getAsstes().subscribe(assets => this.assets = assets);
  }

}
