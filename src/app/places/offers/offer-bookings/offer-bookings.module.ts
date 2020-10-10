import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferBookingsPageRoutingModule } from './offer-bookings-routing.module';

import { OfferBookingsPage } from './offer-bookings.page';
import { PartialPlaceCardComponent } from 'src/app/partials/partial-place-card/partial-place-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferBookingsPageRoutingModule
  ],
  declarations: [OfferBookingsPage, PartialPlaceCardComponent]
})
export class OfferBookingsPageModule {}
