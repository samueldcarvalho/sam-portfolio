import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}
