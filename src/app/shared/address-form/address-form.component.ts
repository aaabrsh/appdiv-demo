import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent {
  @Input() parentForm!: FormGroup;

  addressForm = new FormGroup({
    region: new FormControl(''),
    city: new FormControl(''),
    subcity: new FormControl(''),
    zone: new FormControl(''),
    woreda: new FormControl(''),
    kebele: new FormControl(''),
  });

  ngOnInit() {
    this.parentForm.addControl('address', this.addressForm);
  }
}
