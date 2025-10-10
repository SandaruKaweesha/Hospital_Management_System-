import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-patient-manage',
  imports: [HttpClientModule,FormsModule ],
  templateUrl: './patient-manage.html',
  styleUrl: './patient-manage.css'
})
export class PatientManage implements OnInit {

  public patientsList:any=[FormsModule]; 

  constructor(private http:HttpClient, private cdr: ChangeDetectorRef){
        
  }
  ngOnInit(): void {
    this.loadPatients();
  }


  public customersList:any={
    name:"",
    email:""
  };

    loadPatients(){
      this.http.get("http://localhost:8080/patient/get").
      subscribe(data=>{
        this.patientsList=data;
        // app is using zoneless change detection (provideZonelessChangeDetection),
        // so manually request a view update after async data arrives.
        this.cdr.detectChanges();
      })
    }

    async sendData(){
      await this.http.post("http://localhost:8080/patient/save",this.customersList)
      .subscribe(data=>{
        alert("Ok");
      })
    }   



 

  
}
 