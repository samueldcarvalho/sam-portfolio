import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

const modules = [MatButtonModule, MatIconModule, MatChipsModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}
