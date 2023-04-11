import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { SidebarComponent as SyncFusionSidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @ViewChild('sidebarTreeviewInstance')
  // public sidebarTreeviewInstance: SyncFusionSidebarComponent;
  public data: { [key: string]: Object }[] = [
    {
      nodeId: '01',
      nodeText: 'Installation',
      iconCss: 'icon-microchip icon',
    },
    {
      nodeId: '02',
      nodeText: 'Deployment',
      iconCss: 'icon-thumbs-up-alt icon',
    },
    {
      nodeId: '03',
      nodeText: 'Quick Start',
      iconCss: 'icon-docs icon',
    },
    {
      nodeId: '04',
      nodeText: 'Components',
      iconCss: 'icon-th icon',
      nodeChild: [
        {
          nodeId: '04-01',
          nodeText: 'Calendar',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-02',
          nodeText: 'DatePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-03',
          nodeText: 'DateTimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-04',
          nodeText: 'DateRangePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-05',
          nodeText: 'TimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-06',
          nodeText: 'SideBar',
          iconCss: 'icon-circle-thin icon',
        },
      ],
    },
    {
      nodeId: '05',
      nodeText: 'API Reference',
      iconCss: 'icon-code icon',
      nodeChild: [
        {
          nodeId: '05-01',
          nodeText: 'Calendar',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-02',
          nodeText: 'DatePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-03',
          nodeText: 'DateTimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-04',
          nodeText: 'DateRangePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-05',
          nodeText: 'TimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-06',
          nodeText: 'SideBar',
          iconCss: 'icon-circle-thin icon',
        },
      ],
    },
    {
      nodeId: '06',
      nodeText: 'Browser Compatibility',
      iconCss: 'icon-chrome icon',
    },
    {
      nodeId: '07',
      nodeText: 'Upgrade Packages',
      iconCss: 'icon-up-hand icon',
    },
    {
      nodeId: '08',
      nodeText: 'Release Notes',
      iconCss: 'icon-bookmark-empty icon',
    },
    {
      nodeId: '09',
      nodeText: 'FAQ',
      iconCss: 'icon-help-circled icon',
    },
    {
      nodeId: '10',
      nodeText: 'License',
      iconCss: 'icon-doc-text icon',
    },
  ];

  public data1: { [key: string]: Object }[] = [
    {
      nodeId: '01',
      nodeText: 'Dashboard',
      iconCss: 'icon-microchip icon',
    },
    {
      nodeId: '02',
      nodeText: 'Unemployment',
      iconCss: 'icon-thumbs-up-alt icon',
    },
    {
      nodeId: '03',
      nodeText: 'MSE',
      iconCss: 'icon-th icon',
      nodeChild: [
        {
          nodeId: '03-01',
          nodeText: 'MSE Profile',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '03-02',
          nodeText: 'Manage Growth Level',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '03-04',
          nodeText: 'Assign MSE',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '03-03',
          nodeText: 'Assign Training',
          iconCss: 'icon-circle-thin icon',
        },
      ],
    },
    {
      nodeId: '04',
      nodeText: 'Training Management',
      iconCss: 'icon-code icon',
      nodeChild: [
        {
          nodeId: '04-01',
          nodeText: 'Trainer',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-02',
          nodeText: 'Training',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-03',
          nodeText: 'Evaluate Training',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-04',
          nodeText: 'Training Assessment',
          iconCss: 'icon-circle-thin icon',
        },
      ],
    },
  ];

  public width: string = '290px';
  public target: string = '.main-sidebar-content';
  public mediaQuery: string = '(min-width: 600px)';
  public fields: object = {
    dataSource: this.data1,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
    iconCss: 'iconCss',
  };
  constructor() {}
  toolbarCliked(): void {
    // this.sidebarTreeviewInstance.toggle();
  }
}
