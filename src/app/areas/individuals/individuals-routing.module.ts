import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

import * as resolvers from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: components.IndividualsComponent,
    children: [
      {
        path: '', redirectTo: 'overview', pathMatch: 'full'
      },
      {
        path: 'overview',
        component: components.IndividualsOverviewComponent
      },
      {
        path: ':individualId',
        component: components.IndividualDetailsComponent,
        resolve: { individual: resolvers.IndividualDetailsResolver }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualsRoutingModule { }
