import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item.model'
import { ItemType } from '../../../models/itemType.enum';
import { MatDialog } from '@angular/material/dialog';
import { ItemCardDetailsComponent } from '../item-card-details/item-card-details.component';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  item: Item = {
    type: ItemType.Videogame,
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

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onClick() {
    let dialogRef = this.dialog.open(ItemCardDetailsComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
