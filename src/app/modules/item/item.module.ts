import { NgModule } from "@angular/core";
import { MaterialModule } from '../material.module';
import { ItemCardDetailsComponent } from './item-card-details/item-card-details.component';
import { ItemCardListComponent } from './item-card-list/item-card-list.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
    declarations: [
        ItemCardComponent,
        ItemCardDetailsComponent,
        ItemCardListComponent,
        ItemFormComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        ItemCardComponent,
        ItemCardDetailsComponent,
        ItemCardListComponent,
        ItemFormComponent
    ],
    providers: []
})
export class ItemModule {}