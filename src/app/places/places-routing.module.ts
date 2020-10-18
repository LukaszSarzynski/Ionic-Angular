import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover', children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule),
            canLoad: [AuthGuard]
          },
          {
            path: ':placeId',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule),
            canLoad: [AuthGuard]  
          }
        ],
      },
      {
        path: 'offers', children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule),
            canLoad: [AuthGuard]  
          },
          {
            path: 'new-offer',
            loadChildren: () => import('./offers//new-offer/new-offer.module').then( m => m.NewOfferPageModule),
            canLoad: [AuthGuard]  
          },
          {
            path: 'edit/:placeId',
            loadChildren: () => import('./offers//edit-offer/edit-offer.module').then( m => m.EditOfferPageModule),
            canLoad: [AuthGuard]  
          },
          {
            path: 'bookings/:placeId',
            loadChildren: () => import('./offers//offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule),
            canLoad: [AuthGuard] 
          }
        ]
        
      },
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      }      
    ]
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
