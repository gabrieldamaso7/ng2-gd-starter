import { Routes, RouterModule } from '@angular/router';

import * as containers from './containers';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: containers.HomeComponent },
  { path: 'home',  component: containers.HomeComponent },
  { path: 'about', component: containers.AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./containers/+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: containers.NoContentComponent },
];
