import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSelectModule,
    ScrollingModule,
  ],
  declarations: [],
  providers: [],
})
export class MaterialModule {}
