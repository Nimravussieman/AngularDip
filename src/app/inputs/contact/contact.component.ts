import { Component, TemplateRef, ViewChild } from "@angular/core";
//import { PublicContactModel } from '../Models/PublicContactModel';
import { DataService } from "../../services/htttp.service";//src/app/services/htttp.service

@Component({
  selector: 'contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [DataService]
})
export class ContactsComponent {
  items: any[] = [];
  name: string;
  currentItem?;
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 10;
  @ViewChild('nameTemplate', { static: false }) nameTemplate: TemplateRef<any>;
  @ViewChild('fullTemplate', { static: false }) fullTemplate: TemplateRef<any>;
  @ViewChild('partHasNextTemplate', { static: false }) partHasNextTemplate: TemplateRef<any>;
  @ViewChild('partNotNextTemplate', { static: false }) partNotNextTemplate: TemplateRef<any>;
  @ViewChild('partArrayTemplate', { static: false }) partArrayTemplate: TemplateRef<any>;


  folders = ['a','b','c'];
  notes=[1,2,3,4.5];


  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.retrieveItems();
  }

  show() {
    this.dataService.getContacts().subscribe(c => this.name = c as string);
    console.log(': I am doing something');
  }

  retrieveItems(): void {
    if (typeof this.name == 'undefined' || !this.name) return;
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.dataService.getAuthAccountContactsPaginations(params)
      .subscribe(
        response => {
          const { items, totalItems } = response;
          this.items = items;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.currentItem = null;
    this.currentIndex = -1;
    this.retrieveItems();
  }

  // handlePageSizeChange(event: any): void {
  //   this.pageSize = event.target.value;
  //   this.page = 1;
  //   this.retrieveItems();
  // }

  getRequestParams(searchString: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchString) {
      params[`searchString`] = searchString;
    }

    if (page) {
      params[`pageNumber`] = page;//  -1
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    return params;
  }

  setActiveItem(item: any, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

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


  loadTemplate(item: Object) {
    if (this.isCurrentItem(item)) {
      return this.fullTemplate;
    } else {
      return this.nameTemplate;
    }
  }
  loadTemplate2(item: any) {
    if (this.isObject(item)) {
      if (!Array.isArray(item))
        return this.partHasNextTemplate;
      else
        return this.partArrayTemplate;
    } else {
      return this.partNotNextTemplate;
    }
  }
  isCurrentItem(item): boolean { return this.currentItem && this.currentItem == item }
  isObject(val): boolean { return val && typeof val === 'object' }
}  
