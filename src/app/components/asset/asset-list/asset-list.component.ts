import { SessionService } from './../../../shared/services/session.service';
import { AssetsService } from './../../../shared/services/assets.service';
import { Asset } from './../../../shared/model/asset.model';
import { Component, OnInit } from '@angular/core';
import { Participant } from '../../../shared/model/participant.model';
import { RaspberryService } from './../../../shared/services/raspberry.service';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  assets: Array<Asset> = [];

  constructor(
    private assetsService: AssetsService,
    private raspberryService: RaspberryService) { }

  ngOnInit() {
    this.assetsService.list()
      .subscribe((assets) => this.assets = assets);
  }

  private toggleGreenLed () {
    this.raspberryService.toggleGreenLed().subscribe(data => console.log(data));
  }

  private toggleYellowLed () {
    this.raspberryService.toggleYellowLed().subscribe(data => console.log(data));
  }

  private toggleRedLed () {
    this.raspberryService.toggleRedLed().subscribe(data => console.log(data));
  }

}
