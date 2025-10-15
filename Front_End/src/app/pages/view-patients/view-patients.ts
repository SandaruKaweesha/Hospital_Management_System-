import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swal from 'sweetalert2';
import { Patient } from '../../model/Patient';
import { map } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-patients',
  imports: [FormsModule],
  templateUrl: './view-patients.html',
  styleUrl: './view-patients.css',
})
export class ViewPatients implements OnInit {
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    initFlowbite();
    this.loadPatients();
  }

  // Load the data from backend
  public patientsList: Patient[] = [];
  loadPatients() {
    this.http
      .get<any[]>('http://localhost:8080/patient/get')
      .pipe(
        map((jsonArray) =>
          jsonArray.map(
            (json) =>
              new Patient(
                json.id,
                json.name,
                json.nic,
                json.address,
                json.bloodGroup,
                json.category,
                json.gender,
                json.contact,
                json.note,
                json.age,
                json.allergies
              )
          )
        )
      )
      .subscribe((builtPatients: Patient[]) => {
        this.patientsList = builtPatients;
        console.log(this.patientsList);
        // app is using zoneless change detection (provideZonelessChangeDetection)    // so manually request a view update after async data arrives.
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
  // public selectpatient: Patient | null = null;
  public selectpatient: any = {};
  selectPatient(patient: Patient) {
    this.selectpatient = patient;
    console.log(this.selectpatient);
  }

  updatePatient() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http
          .put('http://localhost:8080/patient/update', this.selectpatient)
          .subscribe((data) => {
            this.loadPatients();

            Swal.fire('Saved!', '', 'success');
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
