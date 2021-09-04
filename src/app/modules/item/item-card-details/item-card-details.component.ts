import { Component, OnInit } from '@angular/core';
import { ItemType } from '../../../models/itemType.enum';
import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-item-card-details',
  templateUrl: './item-card-details.component.html',
  styleUrls: ['./item-card-details.component.scss']
})
export class ItemCardDetailsComponent implements OnInit {

  item: Item = {
    type: ItemType.Film,
    title: 'Death Stranding',
    description: 'After the collapse of civilization, Sam Bridges must journey across a ravaged landscape crawling with otherworldly threats to save mankind from the brink of extinction. From legendary game creator Hideo Kojima comes an all-new, genre-defying experience for the PlayStation®4 system.',
    poster: 'https://i.pinimg.com/originals/df/a8/cc/dfa8cc22e39924bf3f87f1e6f06e2d0b.png',
    publishDate: new Date('2019'),
    developer: 'Kojima Productions',
    platforms: ['PC', 'PS4'],

    director: 'Hideo Kojima',
    duration: 120,

    episodes: 24,
    seasons: 2,

    author: 'H.P. Lovecraft',
    pages: 250
  }
  
  faved = true;
  finished = true;

  changeFav() {
    this.faved = !this.faved;
  }

  changeFinished() {
    this.finished  = !this.finished;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
