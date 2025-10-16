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
  });

  public patientName: string = '';

  addReport() {
    if (this.userForm.valid) {
      this.patientName = this.userForm.get('name')?.value;
      console.log(this.patientName);
    }
  }
}
