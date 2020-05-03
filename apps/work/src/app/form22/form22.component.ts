import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: "nx-form22",
  template: `
   <label>
     Name:
     <input type="text" [formControl]="name">
   </label>
   <p>
     Value: {{ name.value }}
   </p>
   <p>
     <button (click)="updateName()">Update Name</button>
   </p>
  `,
})
export class Form22Component {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}