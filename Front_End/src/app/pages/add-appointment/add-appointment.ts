import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-appointment',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-appointment.html',
  styleUrl: './add-appointment.css',
})
export class AddAppointment {
  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    nic: new FormControl('', [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    bloodGroup: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    contactNumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{12}')]),
    allergies: new FormControl(''),
    note: new FormControl(''),
  });
  get contactNumber() {
    return this.userForm.get('contactNumber');
  }

  get age() {
    return this.userForm.get('age');
  }

  addReport() {}
}
