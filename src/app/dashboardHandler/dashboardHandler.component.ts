import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import * as Chartist from 'chartist';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../api-authorization/authorize.service';

@Component({
  selector: 'app-dashboardHandler',
  templateUrl: './dashboardHandler.component.html',
  styleUrls: ['./dashboardHandler.component.css']
})
export class DashboardHandlerComponent implements OnInit {
  isAuthenticated:boolean;
  // @ViewChild('notAuthorized', {static: false}) notAuthorized: TemplateRef<any>;
  // @ViewChild('authorized', {static: false}) authorized: TemplateRef<any>;
  
  constructor(private authorizeService: AuthorizeService,private router:Router) { this.isAuthenticated = false }

  ngOnInit() {
    /////////////////////////////////////////////////////////////////////////
    this.authorizeService.isAuthenticated()
    .subscribe(value => this.isAuthenticated = value);
  //   this.authorizeService.isAuthenticated()
  //   .subscribe(value => {this.isAuthenticated = value;if(!value) this.router.navigate(['/authentication/login']);console.log(value);});
  }
  ////////////////////////////////////////////////////////////////
// loadTemplate() {
//   if (this.isAuthenticated) {
//       return this.authorized;
//   } else {
//       return this.notAuthorized;
//   }
// }
///////////////////////////////////////////////////////////////
}

