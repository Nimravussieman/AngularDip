import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Phone, PhoneType } from '../../Models/_models';
import { SelectsService } from '../../services/Selects.service';



@Component({
  selector: 'phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent {
  @Input()  
  form: FormGroup;
  // @Input() isEdit?: boolean = true;
  item: Phone = new Phone();
  // selectedId;
  // @Input() types: PhoneType[];
  // @Input() 
  isEdit?: boolean = true;
  // item: Phone = new Phone();  //@Input() item: Address;
  // @Input()
  // set Item(val) {
  //   this.item = val;
  // }
  // @Output() userNameChange = new EventEmitter<Phone>();
  // onNameChange(event: Event,model: string) {
  //   console.log(model);
  //   this.userNameChange.emit(this.item);
  // }


  //ngOnInit(): void { this.createGroup(); }


  createGroup() {
    this.form.addControl("id", this.fb.control(this.item?.id));
    this.form.addControl("value", this.fb.control(this.item?.value, Validators.required));
    this.form.addControl("type", this.fb.control(this.item?.type));
  }

  // createGroup(item: Phone, isEdit: boolean = true) {
  //   this.item=item;
  //   this.isEdit=isEdit;
  //   this.form = this.fb.group({
  //     id: [this.item?.id],
  //     value: [this.item?.value, Validators.required],
  //     phoneType: [this.item?.type],
  //   });
  //   return this.form;
  // }

  selectCheck(optionValue): boolean {
    return false;// optionValue == this.form.controls["type"].value;//this.item.type
  }


  constructor(private service: SelectsService, private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }
  // ifItemNull() { return (this.item === null || this.item === undefined); }
  // ifItemTypeNull() { return this.ifItemNull() ? true : (this.item.phoneType === null || this.item.phoneType === undefined); }

}
