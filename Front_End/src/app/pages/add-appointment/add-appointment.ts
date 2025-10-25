import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class AddAppointment implements OnInit {
  minDate: string;
  queNumber: number = 0;
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.minDate = this.getFormattedMinDate();
  }
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/appointment/viewAll').subscribe((data) => {
      this.userForm.get('queueNumber')?.setValue(data.length);
    });
  }
  getFormattedMinDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // getMonth() is zero-based
    const day = ('0' + today.getDate()).slice(-2);
    const hour = ('0' + today.getHours()).slice(-2);
    const minute = ('0' + today.getMinutes()).slice(-2);

    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  userForm: FormGroup = new FormGroup({
    patientID: new FormControl('', [Validators.required]),
    adminID: new FormControl('', [Validators.required]),
    myDateControl: new FormControl('', [Validators.required]),
    qr: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    roomNumber: new FormControl('', [Validators.required]),
    queueNumber: new FormControl(
      { value: null, disabled: true } // 2. You can still add real validators
    ),
    status: new FormControl(''),
    description: new FormControl(''),
  });

  addReport() {
    console.log('Fuck');
  }
}
