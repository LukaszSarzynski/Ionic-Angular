import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  oPlace: Place;

  constructor(
    private svRoute: ActivatedRoute, 
    private navCtrl: NavController,
    private svPlaces: PlacesService,
    private modalCtrl: ModalController
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

  onBuy() {
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { oPlace: this.oPlace }
    }).then(o => {
      o.present();
      return o.onDidDismiss();
    }).then(oDismiss => {
      if (oDismiss.role == 'buy') {
        console.log(oDismiss.data)
      }
    })
  }
}
