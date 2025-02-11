import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatHeaderCell,
  MatCell,
  MatRow,
  MatHeaderRow,
  MatTable,
} from '@angular/material/table';

import {
  MatCard,
  MatCardHeader,
  MatCardContent,
  MatCardTitle,
} from '@angular/material/card';

import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { HeaderSizeDirective } from './directives/header-size.directive';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatLabel,
    MatHeaderCell,
    MatCell,
    MatRow,
    MatHeaderRow,
    MatTable,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatLabel,
    MatHeaderCell,
    MatCell,
    MatRow,
    MatHeaderRow,
    MatTable,
    NombreApellidoPipe,
    HeaderSizeDirective,
  ],
  declarations: [NombreApellidoPipe, HeaderSizeDirective],
})
export class SharedModule {}
