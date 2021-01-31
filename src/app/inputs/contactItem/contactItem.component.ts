import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from "@angular/core";
//import { PublicContactModel } from '../Models/PublicContactModel';
import { SelectsService } from '../../services/Selects.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, Company, Contact, ContactFieldsPermissions, ContactSource, ContactType, Details, Email, image, MessangerUrl, Phone, Url } from '../../Models/_models';
import { PhoneFormComponent } from "../phone-form/phone-form.component";
import { DataService } from "../../services/htttp.service";
import { formatDiagnostic } from "typescript";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs/internal/observable/throwError";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Location} from '@angular/common';
@Component({
  selector: 'contactsItem',
  templateUrl: './contactItem.component.html',
  //   template: `
  //   <div class="panel-header panel-header-sm">
  // </div>
  // <div class="main-content">


  //   <div class="row">
  //     <div class="col-md-12">
  //       <div class="card">
  //       <div class="card-header">
  //       <h5 class="title">Edit Contact</h5>
  //     </div>
  //     <div class="card-body">



  //         <form [formGroup]="myForm" novalidate (ngSubmit)="submit()">

  //         <!--        <div class="form-group">
  //             <label>Имя</label>
  //             <input class="form-control" name="name" formControlName="userName" />

  //             <div class="alert alert-danger"
  //                 *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
  //                 Не указано имя
  //             </div>
  //         </div>
  //         <div class="form-group">
  //             <label hidden>Email</label>
  //             <input class="form-control" name="email" formControlName="userEmail" />

  //             <div class="alert alert-danger"
  //                 *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
  //                 Некорректный email
  //             </div>
  //         </div>
  //         <div formArrayName="phones">
  //             <div class="form-group" *ngFor="let phone of myForm.controls['phones']['controls']; let i = index">
  //                 <label>Телефон</label>
  //                 <input class="form-control" formControlName="{{i}}" />
  //             </div>
  //         </div>
  //         <div class="form-group">
  //             <button class="btn btn-default" (click)="addPhone()">
  //                 Добавить телефон
  //             </button>
  //             <button class="btn btn-default" [disabled]="myForm.invalid">
  //                 Отправить
  //             </button>
  //         </div>

  //  -->

  // <address-form-comp 
  // [(setItem)]="address"
  // [index]="index"
  // [(types)]="this.service.AddressType"
  // [isEditMode]=true
  // ></address-form-comp>
  // <div>{{address?.value}}</div>
  // <div>{{address?.description}}</div>
  // <div>{{address?.addressType?.name}}</div>

  //     </form>



  //       </div>

  //             </div>
  //           </div>
  //         </div>

  //             `,
  styleUrls: ['./contactItem.component.css'],
  providers: [DataService]
})
export class ContactsItemComponent {
  mainForm: FormGroup;
  item?: Contact = new Contact();
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('card') card: ElementRef;
  isShowPerm = false;
  @ViewChild("phonesArray", { read: ViewContainerRef }) phonesArray: ViewContainerRef;
  isReady: boolean = false;

  @ViewChild(PhoneFormComponent, { static: true }) phoneForm: PhoneFormComponent;

  constructor(private dataService: DataService, private service: SelectsService, private formBuilder: FormBuilder,private _location: Location, private factoryResolver: ComponentFactoryResolver,public dialog: MatDialog) {
    this.dialog.afterAllClosed.subscribe(()=>{})
  }
  ngOnInit(): void {
    if (this.service.someObjectData && this.service.someObjectData.data && this.service.someObjectData.data != null && this.service.someObjectData.data != undefined) {
      console.log("service");
      this.item = this.service.someObjectData.data;
      this.formInit();
    }
    else {
      console.log("server");

      this.dataService.getNewAccountContact({ contactFrom: "Account", id: 0 })
        .subscribe(data => {
          this.item = data["data"];
          this.formInit();
        });
      // .pipe(map(data => {
      //   this.item = data["data"];
      //   this.formInit();
      // }),
      //   catchError(err => {
      //     console.log(err);
      //     return throwError(err);//show dialog !!!!!!!!!!
      //   }));
    }
  }
  formInit() {
    this.mainForm = this.formBuilder.group({
      "id": [this?.item?.id], 
      "name": this.formBuilder.group({
        "firstName": [this?.item?.name?.firstName, [Validators.required]],
        "lastName": [this?.item?.name?.lastName, [Validators.required]],
        "surName": [this?.item?.name?.surName, [Validators.required]]
      }),
      "photo": this.formBuilder.group({
        "id": [this?.item?.photo?.id],
        "name": [this?.item?.photo?.name],
        "imageData": [this?.item?.photo?.imageData],  //byte[]?
      }),//image,
      "dateOfBirth": [this?.item?.dateOfBirth],       //Date,
      "position": [this?.item?.position],
      "phones": this.formBuilder.array([]),           //Phone[],
      "emails": this.formBuilder.array([]),           //Email[],
      "sites": this.formBuilder.array([]),            //Url[],
      "messangerUrls": this.formBuilder.array([]),    //MessangerUrl[],
      // "relatedCompanies": this.formBuilder.array([]), //Company[],
      "addresses": this.formBuilder.array([]),        //Address[]
      // "details": this.formBuilder.array([]),          //Details[],
      "contactType": [this?.item?.type],       //ContactType,
      "contactSource": [this?.item?.source],//ContactSource,
      "description": [this?.item?.description],
      "permissions": this.createPermish(this?.item?.permissions)//[this?.item?.permissions],

    });
    if (this?.item?.phones?.length > 0) this?.item?.phones.forEach(element => {
      (<FormArray>this.mainForm.controls["phones"]).push(this.getGroup(element));
    });
    if (this?.item?.emails?.length > 0) this?.item?.emails.forEach(element => {
      (<FormArray>this.mainForm.controls["emails"]).push(this.getGroup(element));
    });
    if (this?.item?.sites?.length > 0) this?.item?.sites.forEach(element => {
      (<FormArray>this.mainForm.controls["sites"]).push(this.getGroup(element));
    });
    if (this?.item?.messangerUrls?.length > 0) this?.item?.messangerUrls.forEach(element => {
      (<FormArray>this.mainForm.controls["messangerUrls"]).push(this.getGroup(element));
    });
    ////// if (this?.item?.relatedCompanies?.length > 0) this?.item?.relatedCompanies.forEach(element => {
    //////   (<FormArray>this.mainForm.controls["relatedCompanies"]).push(new FormControl(element));
    ////// });
    if (this?.item?.addresses?.length > 0) this?.item?.addresses.forEach(element => {
      (<FormArray>this.mainForm.controls["addresses"]).push(this.getGroup(element));
    });
    ////// if (this?.item?.details?.length > 0) this?.item?.details.forEach(element => {
    //////   (<FormArray>this.mainForm.controls["details"]).push(new FormControl(element));
    ////// });

    this.isReady = true;
    console.log(this.mainForm.controls["permissions"].value);
  }

  createPermish(obj) {
    const group = this.formBuilder.group({});
    for (let key in obj) {
      group.addControl(key, this.formBuilder.control(obj[key]))
    }
    return group;
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    if (file.type.split('/')[0] !== 'image') {
     return;
    }
    this.mainForm.controls["photo"].value["name"] = file.name;//file.type.split('/')[1];
    
    console.log(this.mainForm.controls["photo"].value["name"]);
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.mainForm.controls["photo"].value["imageData"] = myReader.result.toString();
   };
     myReader.readAsDataURL(file);
   }

  getGroup(item) {
    return this.formBuilder.group({
      id: [item?.id],
      value: [item?.value, this.getValidationRules(item)],
      type: [item?.type],
    });
  }
  getValidationRules(name) {///^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/
    if (name instanceof Phone) return [Validators.pattern("")];//^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$
    else if (name instanceof Email) return [Validators.email];///^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    else if (name instanceof Url) return [Validators.required];
    else if (name instanceof MessangerUrl) return [Validators.required];
    //else if (name instanceof Company) return [];
    else if (name instanceof Address) return [Validators.required];
    //else if (name instanceof Details) return [];

  }
  getSetGroup(item, arrayName) {
    const group = this.formBuilder.group({
      id: [item?.id],
      value: [item?.value, Validators.required],
      type: [item?.type],
    });
    //    group.setParent((<FormArray>this.mainForm.controls[arrayName]));
    (<FormArray>this.mainForm.controls[arrayName]).push(group);
    return group;
  }

  dell(i, entity) {
    (<FormArray>this.mainForm.controls[entity]).removeAt(i);
    const arr = this.item[entity];
    this.item[entity].splice(i, 1);
  }
  selectType(event: Event, i, entity, type) {
    console.log(i);
    (<FormGroup>(<FormArray>this.mainForm.controls["phones"]).at(i))
    console.log((<FormGroup>(<FormArray>this.mainForm.controls["phones"]).at(i)).controls["type"].value);
    // const val = (event.target as HTMLSelectElement).value;
    // this.item[entity][i].phoneType = this.service[type].find(t => t.id.toString() == val)
  }
  selectCheck(optionValue, formArrayName, i): boolean {
    return optionValue == (<FormGroup>(<FormArray>this.mainForm.controls[formArrayName]).at(i)).controls["type"].value
  }
  add(arrayName) {
    const entity = this.newEntity(arrayName);
    (<FormArray>this.mainForm.controls[arrayName]).push(this.getGroup(entity));
  }


  newEntity(name) {
    if (name == "phones") return new Phone();
    else if (name == "emails") return new Email();
    else if (name == "sites") return new Url();
    else if (name == "messangerUrls") return new MessangerUrl();
    else if (name == "relatedCompanies") return new Company();
    else if (name == "addresses") return new Address();
    else if (name == "details") return new Details();
  }



  submit() {
    console.log(this.mainForm.value);
    console.log(<Contact>this.mainForm.value);
    console.log(this.mainForm);
    this.dataService.saveAuthAccountContact(<Contact>this.mainForm.value).subscribe(resp=>{
      if(resp["data"])this._location.back();
    })
    
  }
  forPermishClick(e:Event){
    if(e.target !== this.toggleButton.nativeElement && 
      e.target!==this.card.nativeElement)
      this.isShowPerm=false;
    // if(this.isShowPerm)
    //   this.isShowPerm=!this.isShowPerm;
    // e.preventDefault();
  }


  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }


}





























































    //if (this?.item[arrayName] == null || this?.item[arrayName] == undefined) this.item[arrayName] = [];
    // this.item.phones.push(phone);
    // const factory = this.factoryResolver.resolveComponentFactory(PhoneFormComponent);
    // const newComponentRef = this.phonesArray.createComponent(factory);
    // const index = (<FormArray>this.mainForm.controls["phones"]).controls.length;
    // const group = newComponentRef.instance.createGroup(new Phone(), index, true);
    // group.
    // //this.phonesArray.insert(newComponentRef.hostView);
    // (<FormArray>this.mainForm.controls["phones"]).push(newComponentRef.instance.createGroup(new Phone(), index, true));






  // addTest(arrayName) {
  //   const entity = this.newEntity(arrayName);
  //   //(<FormArray>this.mainForm.controls[arrayName]).push(this.phoneForm.createGroup(entity));
  //   if (this?.item[arrayName] == null || this?.item[arrayName] == undefined) this.item[arrayName] = [];

  //   this.item[arrayName].push(entity);
  // }














  // @Input() item: Contact;
  // @Input() type: type;

  //   @Output() userNameChange = new EventEmitter<string>();
  //   onNameChange(model: any){

  //       this.item = model;
  //       this.userNameChange.emit(model);
  //   }



  // handlePageChange(event: number): void {
  //   this.page = event;
  //   this.currentItem = null;
  //   this.currentIndex = -1;
  //   this.retrieveItems();
  // }

  // // handlePageSizeChange(event: any): void {
  // //   this.pageSize = event.target.value;
  // //   this.page = 1;
  // //   this.retrieveItems();
  // // }

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

  // // removeAllItems(): void {
  // //   this.dataService.deleteAll()
  // //     .subscribe(
  // //       response => {
  // //         console.log(response);
  // //         this.refreshList();
  // //       },
  // //       error => {
  // //         console.log(error);
  // //       });
  // // }


  // loadTemplate(item: Object) {
  //   if (this.isCurrentItem(item)) {
  //     return this.fullTemplate;
  //   } else {
  //     return this.nameTemplate;
  //   }
  // }
  // loadTemplate2(item: any) {
  //   if (this.isObject(item)) {
  //     if (!Array.isArray(item))
  //       return this.partHasNextTemplate;
  //     else
  //       return this.partArrayTemplate;
  //   } else {
  //     return this.partNotNextTemplate;
  //   }
  // }
  // isCurrentItem(item): boolean { return this.currentItem && this.currentItem == item }
  // isObject(val): boolean { return val && typeof val === 'object' }

