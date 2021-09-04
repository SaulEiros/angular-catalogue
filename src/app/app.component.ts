import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemFormComponent } from './modules/item/item-form/item-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catalogo';

  constructor(public dialog: MatDialog) {}

  onAddClick(){
    let dialogRef = this.dialog.open(ItemFormComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
