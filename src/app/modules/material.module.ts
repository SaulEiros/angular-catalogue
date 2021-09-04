import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog, MatDialogModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      FlexLayoutModule,
      MatIconModule,
      MatSlideToggleModule,
      MatDialogModule
    ],
    exports: [
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      FlexLayoutModule,
      MatIconModule,
      MatSlideToggleModule,
      MatDialogModule
    ]
})
export class MaterialModule {}