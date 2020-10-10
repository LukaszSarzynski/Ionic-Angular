import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      '1',
      'Karkonoski Park Narodowy',
      'Utworzony 16 stycznia 1959 roku. Powierzchnia otuliny Parku wynosi 130,93 km². W województwie dolnośląskim przy granicy państwowej z Czechami',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/POL_Karkonoski_Park_Narodowy_Logo.svg/1024px-POL_Karkonoski_Park_Narodowy_Logo.svg.png',
      8.00
      ),
    new Place(
      '2',
      'Park Narodowy Gór Stołowych',
      'Utworzony 16 września 1993. Powierzchnia otuliny Parku wynosi 105,15 km². W województwie dolnośląskim przy granicy państwowej z Czechami',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/LOGO_PARKU_NARODOWEGO_G%C3%93R_STO%C5%81OWYCH.svg/1024px-LOGO_PARKU_NARODOWEGO_G%C3%93R_STO%C5%81OWYCH.svg.png',
      12.00
      )      
  ];

  get places() {
    return [...this._places]
  }

  constructor() { }
}
