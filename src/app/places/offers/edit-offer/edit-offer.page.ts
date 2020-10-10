import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  oPlace: Place;

  constructor(
    private svRoute: ActivatedRoute, 
    private navCtrl: NavController,
    private svPlaces: PlacesService
  ) { }

  ngOnInit() {
    this.svRoute.paramMap.subscribe(o => {
      if(!o.has('placeId')) {
        this.navCtrl.pop();
        return;
      } else {
        this.oPlace = this.svPlaces.getPlace(o.get('placeId'));
      }
    });
  }

}
