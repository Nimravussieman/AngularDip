import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from "../../services/htttp.service";//src/app/services/htttp.service
import { ViewEncapsulation } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTESAuth: RouteInfo[] = [
  { path: '/dashboard', title: 'Home', icon: 'design_app', class: '' },

  { path: '/contact', title: 'Contacts', icon: 'business_badge', class: '' },

  // { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
  // { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
  // { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },

  // { path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '' },
  // { path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '' },
  // { path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'objects_spaceship', class: 'active active-pro' },

  { path: '/publiccontact', title: 'Public Contacts', icon: 'business_badge', class: '' },
  { path: '/publiccompany', title: 'Public Companys', icon: 'business_briefcase-24', class: '' },
];

export const ROUTESNotAuth: RouteInfo[] = [
  { path: '/dashboard', title: 'Home', icon: 'design_app', class: '' },
  { path: '/publiccontact', title: 'Public Contacts', icon: 'business_badge', class: '' },
  { path: '/publiccompany', title: 'Public Companys', icon: 'business_briefcase-24', class: '' },
];

export let ROUTES: RouteInfo[] = [];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]

})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  @Input() isAuthenticated: Observable<boolean>;
  logo: string = "NetAng";
  auth: boolean = false;
  togle: boolean = true;
  panelOpenState = false;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.menuItems = ROUTESNotAuth.filter(menuItem => menuItem);
    this.isAuthenticated.subscribe(value => {
      this.setAuth(value);
    });
  }
  
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  };

  setAuth(value) {
    ROUTES = value ? ROUTESAuth : ROUTESNotAuth;
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    if (value != this.auth) {
      this.auth = value;
      this.getLogo(value);
      if (this.auth == true)
        this.getAccountInfo();
    }
  }

  getLogo(value) {
    if (value) {
      this.dataService.getLogo().subscribe(response => {
        let data = response["data"];
        if (data && data != undefined && data != "" && data.length != 0) {
          this.logo = data;
        }
      })
    } else this.logo = "NetAng";
  }
  getAccountInfo() {
    this.dataService.getAccountInfo().subscribe(response => console.log(response["data"]));
  }
  togleClick() {
    this.togle = !this.togle;
  }
}
