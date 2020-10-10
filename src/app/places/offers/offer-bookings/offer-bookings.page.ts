import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
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
