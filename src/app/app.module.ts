import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

//import { HomeComponent } from '../app/TestComp/home/home.component';
//import { DataComponent } from '../app/TestComp/data-component/data.component';
//import { DataService } from '../app/services/htttp.service';


import { ApiAuthorizationModule } from '../app/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from './api-authorization/authorize.interceptor';
import { AuthorizeGuard } from './api-authorization/authorize.guard';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';


//const appRoutes: Routes = [
//  { path: '', component: AppComponent, pathMatch: 'full' },
//  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full', },
//  //{ path: '', component: AdminLayoutComponent, canActivate: [AuthorizeGuard] },
//  //{
//  //  path: '', component: AdminLayoutComponent, pathMatch: 'full', canActivate: [AuthorizeGuard],
//  //children:
//  //[
//  //    { path: '', loadChildren: './admin-layout.module#AdminLayoutModule' },

//  //]},

//  //{ path: 'home', component: HomeComponent},
//  //{ path: 'data', component: DataComponent, canActivate: [AuthorizeGuard] },
//  ////{ path: '**', component: HomeComponent }
//  //{ path: '**', redirectTo: 'dashboard' }

//];


@NgModule({
  imports: [
    /////////////////////////////////////////
    ApiAuthorizationModule,
        /////////////////////////////////////////

    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),


   // RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
///////////////////////////////////////////////
    //HomeComponent,
    //DataComponent,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
