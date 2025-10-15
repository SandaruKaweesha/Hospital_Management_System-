import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient-manage',
  imports: [FormsModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './patient-manage.html',
  styleUrls: ['./patient-manage.css'],
})
export class PatientManage implements OnInit {
  ngOnInit(): void {
    initFlowbite();
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
