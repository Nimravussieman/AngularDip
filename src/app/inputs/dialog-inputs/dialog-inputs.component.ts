import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dialog-inputs',
  templateUrl: './dialog-inputs.component.html',
  styleUrls: ['./dialog-inputs.component.css']
})
export class DialogInputsComponent {

  constructor() {}
  @Input() itemBefore: any;
  @Input() component: any;

    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: any){
         
        //this.item = model;
        this.userNameChange.emit(model);
    }

  onSubmit() {
    alert('Thanks!');
  }
}



