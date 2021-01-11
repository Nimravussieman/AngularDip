import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTESAuth: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' },
    
    { path: '/publiccontact', title: 'Public Contacts', icon: 'business_badge', class: '' },
    { path: '/publiccompany', title: 'Public Companys', icon: 'business_briefcase-24', class: '' },
];

export const ROUTESNotAuth: RouteInfo[] = [
  { path: '/dashboard', title: 'Home', icon: 'design_app', class: '' },
  // { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
  // { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
  // { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },
  { path: '/publiccontact', title: 'Public Contacts', icon: 'business_badge', class: '' },
  { path: '/publiccompany', title: 'Public Companys', icon: 'business_briefcase-24', class: '' },
];

export let ROUTES: RouteInfo[]=[];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  @Input() isAuthenticated: Observable<boolean>;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTESNotAuth.filter(menuItem => menuItem);
    this.isAuthenticated.subscribe(value => {
      ROUTES = value ? ROUTESAuth : ROUTESNotAuth;
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    });
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
