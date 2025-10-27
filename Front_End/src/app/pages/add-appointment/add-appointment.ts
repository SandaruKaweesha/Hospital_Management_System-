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
import { Appointment } from '../../model/Appointment';

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

  public appointmentID: number = 0;
  public appointmentType: string = '';
  public appointmentQr: string = '';
  public appointmentLocalDateTime: string = '';
  public appointmentDescription: string = '';
  public appointmentStatus: string = '';
  public appointmentRoomNumber: number = 0;
  public appointmentQnumber: number = 0;
  public appointmentpatientId: number = 0;
  public appointmentDoctorId: number = 0;

  addAppointment() {
    this.appointmentDescription = this.userForm.get('description')?.value;
    this.appointmentStatus = this.userForm.get('status')?.value;

    if (this.appointmentDescription == '') {
      this.appointmentDescription = 'No';
    }
    if (this.appointmentStatus == '') {
      this.appointmentStatus = 'No';
      this;
    }
    this.http
      .post('http://localhost:8080/appointment/add', this.setAppoitment())
      .subscribe((data) => {
        console.log('Hello World');
      });
  }
  public app: any;
  setAppoitment(): Appointment {
    this.appointmentLocalDateTime = this.userForm.get('myDateControl')?.value; // might be a string or Date
    //this.appointmentLocalDateTime = new Date(this.appointmentLocalDateTime!).toISOString(); // ISO string
    console.log(typeof this.appointmentLocalDateTime);
    // If your Appointment model expects a Date, you can still send string in HTTP.
    this.app = new Appointment(
      0,
      this.userForm.get('category')?.value,
      this.userForm.get('qr')?.value,
      this.appointmentLocalDateTime, // IMPORTANT: pass ISO string here
      this.appointmentDescription,
      this.appointmentStatus,
      this.userForm.get('roomNumber')?.value,
      this.userForm.get('queueNumber')?.value,
      this.userForm.get('patientID')?.value,
      this.userForm.get('adminID')?.value
    );
    console.log(typeof this.app.dateAndTime);
    return this.app;
  }
}
