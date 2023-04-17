import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unemployed-form',
  templateUrl: './unemployed-form.component.html',
  styleUrls: ['./unemployed-form.component.css'],
})
export class UnemployedFormComponent {
  
  // addressForm = new FormGroup({
  //   region: new FormControl(''),
  //   city: new FormControl(''),
  //   subcity: new FormControl(''),
  //   zone: new FormControl(''),
  //   woreda: new FormControl(''),
  //   kebele: new FormControl(''),
  // });

  unemployedForm = new FormGroup({
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({}),
  });

  handleFormSubmit() {
    console.log(this.unemployedForm)
  }
}
