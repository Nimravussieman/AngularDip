import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address,AddressType } from '../../Models/_models';


@Component({
  selector: 'address-form-comp',
  //templateUrl: './address-form-comp.component.html',
  template: `

  <div class="row">
      <div class="card">
      <div class="card-header">
      <h5 class="title">Edit Address</h5>
    </div>
    <div class="card-body">





        <div class="form-group">
          <label>Address</label>
          <input class="form-control" name="Address"  
          [(ngModel)]="this.item.value" 
          [disabled]="!isEditMode"
          required
          />
          
                  <!-- <div class="alert alert-danger"
                  *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
                  Некорректный email
                  </div> -->
        </div>


        <mat-form-field class="example-full-width">
          <mat-label>Address</mat-label>
           <input matInput placeholder="" 
           [(ngModel)]="this.item.value" 
           [disabled]="!isEditMode"
           class="form-control"

           (ngModelChange)="onNameChange($event)">
        </mat-form-field>
    
        <div class="form-group" *ngIf=isEditMode>
      <mat-form-field class="example-full-width">
        <mat-label>Leave a comment</mat-label>
        <textarea matInput placeholder="" rows="4" cols="80" class="form-control"
        [disabled]="!isEditMode"
        [(ngModel)]="this.item.description" >
        </textarea>
      </mat-form-field>
      </div>

      <div class="form-group">
        <mat-label>Address Type</mat-label>
        <select  (change)="selectId($event)" class="form-control" 
        [disabled]="!isEditMode">
          <option value=""></option>
          <option *ngFor="let item of this.types" [value]="item.id"
          [disabled]="isDisSel(item.id)"  [selected]="isDisSel(item.id)">{{ item.name }}</option>
        </select>

        <p>You selected: {{selectedId}}</p>
          <p>You selected: {{this?.item?.addressType?.name}}</p>
          </div>





          </div></div></div>

        
            `,
  styleUrls: ['./address-form-comp.component.css']
})
//formControlName="Address{{index}}"
//formControlName="Address{{index}}"

export class AddressFormCompComponent {
  @Input() isEditMode?:boolean=true;
  selectedId;
  isValid = false;
  @Input() index?: any;
  @Input() types: AddressType[];
  item: Address = new Address();  //@Input() item: Address;
  //@Input()
  // set setItem(val) {
  //   if(val!=""||val!=null||val!=undefined)this.isValid=true;
  //   this.item = val;
  //   this.selectedId = this.ifItemTypeNull() ? null : this.item.addressType.id;
  // }
  // @Output() userNameChange = new EventEmitter<Address>();
  // onNameChange(event: Event,model: string) {
  //   console.log("onNameChange");
  //   this.userNameChange.emit(this.item);
  // }
  // ngOnInit(): void {   }

  // selectId(event: Event) {
  //   this.selectedId = (event.target as HTMLSelectElement).value;
  //   this.item.addressType = this.types.find(i=>i.id==this.selectedId);
  // }
  // isDisSel(itemId) {
  //   return this.selectedId == itemId;
  // }

  // group = this.fb.group({
  //   "value": [this?.item?.value,[Validators.required]],
  //   "id":[this?.item?.id],
  //   "addressType": [this?.item?.type],
  // });


  constructor(private fb: FormBuilder) { }

  ifItemNull() { return (this.item === null || this.item === undefined); }
  ifItemTypeNull() { return this.ifItemNull() ? true : (this.item.type === null || this.item.type === undefined); }

}



  // ifNotNullTypes() {
  //   return (this.types === null || this.types === undefined )
  // }


// <mat-label>Favorite Car</mat-label>
// <select matNativeControl (ngModelChange)="selectId($event)">
//   <option value=""></option>
//   <option *ngFor="let item of this.service.AddressType" [value]="item.id"
//   [disabled]="selectedId == item.id"     [selected]="selectedId == item.id">{{ item.name }}</option>
// </select>

// <p>You selected: {{selectedId}}</p>
//   <p>You selected: {{this.selectedItem?.name}}</p>
