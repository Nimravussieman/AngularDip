import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { HomeComponent } from '../app/TestComp/home/home.component';
import { ApiAuthorizationModule } from './api-authorization/api-authorization.module';


  //{
  //  path: 'home', loadChildren: '../app/api-authorization/api-authorization.module#ApiAuthorizationModule'
  //},


const routes: Routes = [
  //{
  //  path: 'authentication',
  //  loadChildren: () => import('../app/api-authorization/api-authorization.module').then(m => m.ApiAuthorizationModule)
  //  //,
  //  //canLoad: [featureOneGuard]
  //},

  //{path: '', component: HomeComponent},
  //{ path: 'authentication', loadChildren: () => ApiAuthorizationModule },
  //{ path: 'authentication/profile', loadChildren: () => ApiAuthorizationModule },

  {    path: '', redirectTo: 'dashboard', pathMatch: 'full',  },
  {
    path: '', component: AdminLayoutComponent, children:
      [
        { path: '', loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule' }
      ]
  },


  //{ path: '**', redirectTo: '' }

  {    path: '**', redirectTo: 'dashboard'  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes
    //  ,{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
