import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionsToolbarComponent } from './actions-toolbar/actions-toolbar.component';
import { PrintToolbarComponent } from './print-toolbar/print-toolbar.component';
import { ListComponent } from './list/list.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FormHeaderComponent } from './form-header/form-header.component';

@NgModule({
  declarations: [
    ActionsToolbarComponent,
    PrintToolbarComponent,
    ListComponent,
    HeaderToolbarComponent,
    AddressFormComponent,
    FormHeaderComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  exports: [
    ActionsToolbarComponent,
    PrintToolbarComponent,
    ListComponent,
    HeaderToolbarComponent,
    AddressFormComponent,
  ],
})
export class SharedModule {}
