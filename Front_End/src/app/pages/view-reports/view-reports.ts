import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MedicalReport } from '../../model/MedicalReport';
import { map } from 'rxjs';

@Component({
  selector: 'app-view-reports',
  imports: [],
  templateUrl: './view-reports.html',
  styleUrl: './view-reports.css',
})
export class ViewReports implements OnInit {
  constructor(private http: HttpClient) {}
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
                json.category,
                json.pdfSrc,
                json.dateTime,
                json.patientId,
                json.adminId,
                json.labNumber
              ) // <-- Pass the whole object
          )
        )
      )
      .subscribe((medicalRecord: MedicalReport[]) => {
        this.allReport = medicalRecord;
        console.log(typeof this.allReport[1].getDate());
      });
  }

  selectPatient() {}
  updateReport() {}
}
