import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MedicalReport } from '../../model/MedicalReport';
import { map } from 'rxjs';
import { joinAllInternals } from 'rxjs/internal/operators/joinAllInternals';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-reports',
  imports: [],
  templateUrl: './view-reports.html',
  styleUrl: './view-reports.css',
})
export class ViewReports implements OnInit {
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.loadReports();
  }
  public allReport: MedicalReport[] = [];
  loadReports() {
    this.http
      .get<any[]>('http://localhost:8080/medical-report/getAll')
      .pipe(
        map((jsonArray) =>
          jsonArray.map(
            (json) =>
              new MedicalReport(
                json.id,
                json.category,
                json.pdfSrc,
                json.dateTime,
                json.patientId,
                json.adminId,
                json.labNumber
              )
          )
        )
      )
      .subscribe((medicalRecord: MedicalReport[]) => {
        this.allReport = medicalRecord;
        this.cdr.detectChanges();
      });
  }
  deleteMedicalReport(id: any) {
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
          this.http
            .delete(`http://localhost:8080/medical-report/delete/${id}`)
            .subscribe((data) => {
              this.loadReports();
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

  selectPatient() {}
  updateReport() {}
}
