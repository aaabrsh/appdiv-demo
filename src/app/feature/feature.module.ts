import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnemployedListComponent } from './unemployed-list/unemployed-list.component';
import { UnemployedFormComponent } from './unemployed-form/unemployed-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UnemployedListComponent,
    UnemployedFormComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DropDownListModule,
    DatePickerModule
  ]
})
export class FeatureModule { }
