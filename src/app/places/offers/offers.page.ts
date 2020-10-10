import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  aOffers: Place[];

  constructor(private svPlaces: PlacesService) { }

  ngOnInit() {
    this.aOffers = this.svPlaces.places;
  }

}
