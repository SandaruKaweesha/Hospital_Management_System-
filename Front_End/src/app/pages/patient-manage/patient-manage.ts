import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-patient-manage',
  imports: [FormsModule],
  templateUrl: './patient-manage.html',
  styleUrls: ['./patient-manage.css'],
})
export class PatientManage implements OnInit {
  public patientsList: any = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    initFlowbite();
    this.loadPatients();
  }
  // Load the data from backend
  loadPatients() {
    this.http.get('http://localhost:8080/patient/get').subscribe((data) => {
      this.patientsList = data;
      // app is using zoneless change detection (provideZonelessChangeDetection),
      // so manually request a view update after async data arrives.
      this.cdr.detectChanges();

      initFlowbite();
      // Initialize Flowbite after the data is loaded and the view is updated.
    });
  }

  deletePatient(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          'focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700',
        cancelButton:
          'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.http.delete(`http://localhost:8080/patient/delete/${id}`).subscribe((data) => {
            this.loadPatients();
          });
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  }

  //Update Section
  public patient: any = {};
  updatePatient(patient: any) {
    console.log(patient);
    this.patient = patient;
  }

  // public customersList:any={
  //   name:"",
  //   email:""
  // };
  // async sendData(){
  //   await this.http.post("http://localhost:8080/patient/save",this.customersList)
  //   .subscribe(data=>{
  //     alert("Ok");
  //   })
  // }
}
