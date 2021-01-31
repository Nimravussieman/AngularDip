import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AccountProfileComponent } from './inputs/account-profile/account-profile.component';
import { DialogInputsComponent } from './inputs/dialog-inputs/dialog-inputs.component';
import { FormCompComponent } from './inputs/form-comp/form-comp.component';

import { ApiAuthorizationModule } from '../app/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from './api-authorization/authorize.interceptor';

//import { HomeComponent } from '../app/TestComp/home/home.component';
//import { DataComponent } from '../app/TestComp/data-component/data.component';
//import { DataService } from '../app/services/htttp.service';


 import { LayoutModule } from '@angular/cdk/layout';
// import { PhoneFormComponent } from '../app/inputs/phone-form/phone-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

//////////////////////////////////////////////////////////////////////////



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

    // MatButtonModule,
    // MatRadioModule,
    // MatCardModule,
    ReactiveFormsModule,
     LayoutModule,
     MatInputModule,
     MatButtonModule,
     MatSelectModule,
     MatRadioModule,
     MatCardModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatSelectModule,

   // RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FormCompComponent,
    AccountProfileComponent,
    DialogInputsComponent,
    // PhoneFormComponent,
    
///////////////////////////////////////////////
    //HomeComponent,
    //DataComponent,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
