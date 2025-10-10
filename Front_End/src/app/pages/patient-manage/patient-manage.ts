import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-patient-manage',
  imports: [HttpClientModule],
  templateUrl: './patient-manage.html',
  styleUrl: './patient-manage.css'
})
export class PatientManage implements OnInit {

    public patientsList:any=[]; 

  constructor(private http:HttpClient, private cdr: ChangeDetectorRef){
        
  }
    ngOnInit(): void {
      this.loadPatients();
    }



    loadPatients(){
      this.http.get("http://localhost:8080/patient/get").
      subscribe(data=>{
        this.patientsList=data;
        // app is using zoneless change detection (provideZonelessChangeDetection),
        // so manually request a view update after async data arrives.
        this.cdr.detectChanges();
      })
    }
}
 