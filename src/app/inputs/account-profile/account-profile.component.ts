import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataService } from '../../services/htttp.service';

@Component({
  selector: 'account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent {
/*   items: any[] = [];
  name: string;
  currentItem?: Object;
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 10;
  isEdit = false;
 */
  profile:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private dataService: DataService) {}
  
  ngOnInit(): void {
    this.getProfile();
  }
  // permissions = permissions, addreses = addreses, bankDetails = bankDetails, booleanFields = booleanFields, companies = companies, contacts= contacts, currencyName= currencyName ,
  //   currencies= currencies,dateTimeFields= dateTimeFields,description= description,details= details,                    emails= emails,                    employees= employees,                    fieldOfActivities= fieldOfActivities,                    fileFields= fileFields,                    imageFields= imageFields,                    jobs= jobs,                    messangerUrls= messangerUrls,
  //   name= name,                    numericFields= numericFields,                    operations= operations,                    phones= phones,                    products= products,                    projects= projects,                    sites= sites,                    stringFields= stringFields,                    urlsFields= urlsFields                }; 

  getProfile(){
    this.dataService.getProfile().subscribe(request=>{
        this.profile = request["profile"];
    });
  }




  // retrieveItems(): void {
  //   if (typeof this.name == 'undefined' || !this.name) return;
  //   const params = this.getRequestParams(this.name, this.page, this.pageSize);

  //   this.dataService.getContactsPaginations(params)
  //     .subscribe(
  //       response => {
  //         const { items, totalItems } = response;
  //         this.items = items;
  //         this.count = totalItems;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // getRequestParams(searchString: string, page: number, pageSize: number): any {
  //   // tslint:disable-next-line:prefer-const
  //   let params: any = {};

  //   if (searchString) {
  //     params[`searchString`] = searchString;
  //   }

  //   if (page) {
  //     params[`pageNumber`] = page;//  -1
  //   }

  //   if (pageSize) {
  //     params[`pageSize`] = pageSize;
  //   }

  //   return params;
  // }

  // setActiveItem(item: any, index: number): void {
  //   this.currentItem = item;
  //   this.currentIndex = index;
  // }

  // removeAllItems(): void {
  //   this.dataService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.refreshList();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // handlePageChange(event: number): void {
  //   this.page = event;
  //   this.currentItem = null;
  //   this.currentIndex = -1;
  //   this.retrieveItems();
  // }


  // // loadTemplate(item: Object) {
  // //   if (this.isCurrentItem(item)) {
  // //     return this.fullTemplate;
  // //   } else {
  // //     return this.nameTemplate;
  // //   }
  // // }
  // // loadTemplate2(item: any) {
  // //   if (this.isObject(item)) {
  // //     if (!Array.isArray(item))
  // //       return this.partHasNextTemplate;
  // //     else
  // //       return this.partArrayTemplate;
  // //   } else {
  // //     return this.partNotNextTemplate;
  // //   }
  // // }
  // isCurrentItem(item): boolean { return this.currentItem && this.currentItem == item }
  // isObject(val): boolean { return val && typeof val === 'object' }

}
