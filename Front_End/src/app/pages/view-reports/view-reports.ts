import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MedicalReport } from '../../model/MedicalReport';
import { map } from 'rxjs';
import { joinAllInternals } from 'rxjs/internal/operators/joinAllInternals';

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
  selectPatient() {}
  updateReport() {}
}
