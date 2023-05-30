import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatProgressBarModule,
  MatTooltipModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}
