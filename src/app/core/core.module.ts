import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import {
  SidebarModule,
  MenuAllModule,
  TreeViewAllModule,
  ToolbarAllModule,
} from '@syncfusion/ej2-angular-navigations';
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import {
  RadioButtonModule,
  ButtonModule,
} from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SidebarModule,
    MenuAllModule,
    TreeViewAllModule,
    ToolbarAllModule,
    ListViewAllModule,
    TextBoxAllModule,
    DropDownListModule,
    RadioButtonModule,
    ButtonModule,
  ],
})
export class CoreModule {}
