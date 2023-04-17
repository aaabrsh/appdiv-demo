import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnemployedListComponent } from './unemployed-list/unemployed-list.component';
import { UnemployedFormComponent } from './unemployed-form/unemployed-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'unemployed',
    children: [
      { path: 'list', component: UnemployedListComponent },
      { path: 'form', component: UnemployedFormComponent },
    ],
  },
  {
    path: 'mse',
    children: [
      { path: 'list', component: DashboardComponent },
      { path: 'growth-level/form', component: DashboardComponent },
    ],
  },
  {
    path: 'mse-profile/form',
    component: DashboardComponent,
  },
  {
    path: 'assign-mse',
    children: [
      { path: 'list', component: DashboardComponent },
      { path: 'form', component: DashboardComponent },
    ],
  },
  {
    path: 'trainer',
    children: [
      { path: 'list', component: DashboardComponent },
      { path: 'form', component: DashboardComponent },
    ],
  },
  {
    path: 'training',
    children: [
      { path: 'list', component: DashboardComponent },
      { path: 'form', component: DashboardComponent },
      { path: 'assessment/form', component: DashboardComponent },
    ],
  },
  {
    path: 'assign-training',
    children: [
      { path: 'list', component: DashboardComponent },
      { path: 'form', component: DashboardComponent },
    ],
  },
  {
    path: 'workflow/form',
    component: DashboardComponent,
  },
  {
    path: 'unemployed-verification/form',
    component: DashboardComponent,
  },
  {
    path: 'loan-application/form',
    component: DashboardComponent,
  },
  {
    path: 'loan-verification/form',
    component: DashboardComponent,
  },
  {
    path: 'loan-decision/form',
    component: DashboardComponent,
  },
  {
    path: 'loan-funding/form',
    component: DashboardComponent,
  },
  {
    path: 'loan-collection/form',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
