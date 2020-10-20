import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() oPlace: Place;

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}

  onBuy() {
    this.modalCtr.dismiss({place: this.oPlace}, 'buy');
  }

  onClose() {
    this.modalCtr.dismiss(null, 'cancel');
  }

}
