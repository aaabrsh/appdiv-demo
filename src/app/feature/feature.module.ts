import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TabModule } from '@syncfusion/ej2-angular-navigations';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnemployedListComponent } from './unemployed-list/unemployed-list.component';
import { UnemployedFormComponent } from './unemployed-form/unemployed-form.component';
import { UserInfoFormComponent } from './unemployed-form/user-info-form/user-info-form.component';
import { EducationalLevelFormComponent } from './unemployed-form/educational-level-form/educational-level-form.component';
import { ContactPersonFormComponent } from './unemployed-form/contact-person-form/contact-person-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UnemployedListComponent,
    UnemployedFormComponent,
    UserInfoFormComponent,
    EducationalLevelFormComponent,
    ContactPersonFormComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DropDownListModule,
    DatePickerModule,
    TabModule,
  ],
})
export class FeatureModule {}
