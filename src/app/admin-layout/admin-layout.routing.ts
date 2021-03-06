import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { IconsComponent } from '../icons/icons.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { PublicContactsComponent } from '../publicComponents/publicContacts/publicContact.component';
import { PublicCompanysComponent } from '../publicComponents/publicCompanys/publicCompanys.component';
import { DashboardHandlerComponent } from '../dashboardHandler/dashboardHandler.component';
import { ContactsComponent } from '../inputs/contact/contact.component';
import { AccountProfileComponent } from '../inputs/account-profile/account-profile.component';
import { ContactsItemComponent } from '../inputs/contactItem/contactItem.component';


export const AdminLayoutRoutes: Routes = [
    //{ path: 'dashboard',      component: DashboardComponent },
    { path: 'dashboard',      component: DashboardHandlerComponent },
    { path: 'contactsItem',      component: ContactsItemComponent },
    { path: 'contact',      component: ContactsComponent },
    { path: 'account-profile',   component: AccountProfileComponent },
    { path: 'contactsItem',      component: ContactsItemComponent },

    



    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'publiccontact',  component: PublicContactsComponent },
    { path: 'publiccompany',  component: PublicCompanysComponent }
];
