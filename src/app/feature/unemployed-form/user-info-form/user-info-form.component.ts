import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css'],
})
export class UserInfoFormComponent {
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
    dob: new FormControl(''),
    gender: new FormControl(''),
    phoneNo: new FormControl(''),
    address: new FormGroup({}),
  });

  dropdownData: string[] = ['male', 'Female'];

  handleFormSubmit() {
    console.log(this.unemployedForm);
  }
}
