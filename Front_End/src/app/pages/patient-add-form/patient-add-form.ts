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
  selector: 'app-patient-add-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-add-form.html',
  styleUrl: './patient-add-form.css',
})
export class PatientAddForm {
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

  public patientName: string = '';
  public patientAddress: string = '';
  public patientNic: string = '';
  public patientAge: string = '';
  public patientBloodGroup: string = '';
  public patientGender: string = '';
  public patientCategory: string = '';
  public patientContactNumber: string = '';
  public patientAllergies: string = '';
  public patientNote: string = '';

  addReport() {
    if (this.userForm.valid) {
      this.patientName = this.userForm.get('name')?.value;
      this.patientAddress = this.userForm.get('address')?.value;
      this.patientNic = this.userForm.get('nic')?.value;
      this.patientAge = this.userForm.get('age')?.value;
      this.patientBloodGroup = this.userForm.get('bloodGroup')?.value;
      this.patientGender = this.userForm.get('gender')?.value;
      this.patientCategory = this.userForm.get('category')?.value;
      this.patientContactNumber = this.userForm.get('contactNumber')?.value;
      this.patientAllergies = this.userForm.get('allergies')?.value;
      this.patientNote = this.userForm.get('note')?.value;
      if (this.patientAllergies == '') {
        this.patientAllergies = 'No';
      }
      if (this.patientNote == '') {
        this.patientNote = 'No';
      }
    }
  }
}
