import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @ViewChild('sidebarTreeviewInstance')

  public data: { [key: string]: Object }[] = [
    {
      nodeId: '01',
      nodeText: 'Dashboard',
      iconCss: 'icon-microchip icon',
      navigateUrl: '/home',
    },
    {
      nodeId: '02',
      nodeText: 'Unemployment',
      iconCss: 'icon-thumbs-up-alt icon',
      navigateUrl: '/home/unemployed/list',
    },
    {
      nodeId: '03',
      nodeText: 'MSE',
      iconCss: 'icon-th icon',
      navigateUrl: '/home/mse/list',
      nodeChild: [
        {
          nodeId: '03-01',
          nodeText: 'MSE Profile',
          iconCss: 'icon-circle-thin icon',
          navigateUrl: '/home/mse-profile/form',
        },
        {
          nodeId: '03-02',
          nodeText: 'Manage Growth Level',
          iconCss: 'icon-circle-thin icon',
          navigateUrl: '/home/mse/growth-level/form',
        },
        {
          nodeId: '03-04',
          nodeText: 'Assign MSE',
          iconCss: 'icon-circle-thin icon',
          navigateUrl: '/home/assign-mse/list',
        },
        {
          nodeId: '03-03',
          nodeText: 'Assign Training',
          iconCss: 'icon-circle-thin icon',
          navigateUrl: '/home/assign-training/list',
        },
      ],
    },
    {
      nodeId: '04',
      nodeText: 'Training Management',
      iconCss: 'icon-code icon',
      navigateUrl: '/home/trainer/list',
      nodeChild: [
        {
          nodeId: '04-01',
          nodeText: 'Trainer',
          iconCss: 'icon-arrowhead-up-01 icon',
          navigateUrl: '/home/trainer/list',
        },
        {
          nodeId: '04-02',
          nodeText: 'Training',
          iconCss: 'icon-circle-thin icon',
          navigateUrl: '/home/training/list',
        },
        {
          nodeId: '04-03',
          nodeText: 'Evaluate Training',
          iconCss: 'icon-circle-thin icon',
          navigateUrl: '/home/training/assessment/form',
        },
        {
          nodeId: '04-04',
          nodeText: 'Training Assessment',
          iconCss: 'icon-circle-thin icon',
          navigateUrl: '/home/training/assessment/form',
        },
      ],
    },
  ];

  public width: string = '290px';
  public target: string = '.main-sidebar-content';
  public mediaQuery: string = '(min-width: 600px)';
  public fields: object = {
    dataSource: this.data,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
    iconCss: 'iconCss',
    navigateUrl: 'navigateUrl',
  };

  constructor() {}
}
