import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsToolbarComponent } from './actions-toolbar/actions-toolbar.component';
import { PrintToolbarComponent } from './print-toolbar/print-toolbar.component';
import { ListComponent } from './list/list.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';



@NgModule({
  declarations: [
    ActionsToolbarComponent,
    PrintToolbarComponent,
    ListComponent,
    HeaderToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
