import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { IconsComponent } from '../icons/icons.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { PublicContactsComponent } from '../publicComponents/publicContacts/publicContact.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardHandlerComponent } from '../dashboardHandler/dashboardHandler.component';
import { DashboardUnauthorizedComponent } from '../dashboardUnauthorized/dashboardUnauthorized.component';
import { PublicCompanysComponent } from '../publicComponents/publicCompanys/publicCompanys.component';
import { ContactsComponent } from '../inputs/contact/contact.component';
import { ContactsItemComponent } from '../inputs/contactItem/contactItem.component';
import { AddressFormCompComponent } from '../inputs/address-form-comp/address-form-comp.component';
import { PhoneFormComponent } from '../inputs/phone-form/phone-form.component';

import {SelectsService} from '../services/Selects.service'; 
import {DataService} from '../services/htttp.service'; 
////////////////////////////////////////// material //////////////////////////////////////////
import{MaterialModule}from '../material-module'
//import { ApiAuthorizationModule } from '../api-authorization/api-authorization.module';
//import { LoginMenuComponent } from '../api-authorization/login-menu/login-menu.component';
//import { AuthorizeInterceptor } from '../api-authorization/authorize.interceptor';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    NgxPaginationModule,
    MaterialModule,
    ToastrModule.forRoot(),

   
  ],
  declarations: [
    DashboardComponent,
    DashboardHandlerComponent,
    DashboardUnauthorizedComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    PublicContactsComponent,
    PublicCompanysComponent,
    ContactsComponent,
    ContactsItemComponent,
    AddressFormCompComponent,
    PhoneFormComponent,
  ],
  providers: [DataService,SelectsService/*{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }*/],
})

export class AdminLayoutModule {}
