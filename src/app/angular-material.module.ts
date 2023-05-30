import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatSelectModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}
