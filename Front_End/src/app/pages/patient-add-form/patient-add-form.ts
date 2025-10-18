import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Patient } from '../../model/Patient';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-add-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-add-form.html',
  styleUrl: './patient-add-form.css',
})
export class PatientAddForm {
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

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
      console.log(this.setObject());
      this.http.post('http://localhost:8080/patient/save', this.setObject()).subscribe({
        next: (respond) => {
          console.log('We Fucked It');
          Swal.fire({
            title: 'Done',
            icon: 'success',
            draggable: true,
          });

          this.userForm.reset();
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
          this.userForm.reset();
        },
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  }

  setObject(): Patient {
    return new Patient(
      0,
      this.patientName,
      this.patientNic,
      this.patientAddress,
      this.patientBloodGroup,
      this.patientCategory,
      this.patientGender,
      this.patientContactNumber,
      this.patientNote,
      this.patientAge,
      this.patientAllergies
    );
  }
}

// this.http.post('http://localhost:8080/patient/save', this.setObject()).subscribe((data) => {
//         console.log('We Fucked It');
//         Swal.fire({
//           title: 'Done',
//           icon: 'success',
//           draggable: true,
//         });
//       });
