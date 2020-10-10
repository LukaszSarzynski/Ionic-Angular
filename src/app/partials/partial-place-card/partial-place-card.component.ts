import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'partial-place-card',
  templateUrl: './partial-place-card.component.html',
  styleUrls: ['./partial-place-card.component.scss'],
})
export class PartialPlaceCardComponent implements OnInit {
  @Input() oPlace: Place;

  constructor() { }

  ngOnInit() {}

}
