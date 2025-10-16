import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicalReport } from '../../model/MedicalReport';

@Component({
  selector: 'app-patient-add-form',
  imports: [FormsModule],
  templateUrl: './patient-add-form.html',
  styleUrl: './patient-add-form.css',
})
export class PatientAddForm {
  public formData: FormData = new FormData();
  public report: MedicalReport | null = null;
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  // onFileSelected(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     this.selectedFile = inputElement.files[0];
  //     console.log('Selected file:', this.selectedFile);
  //     this.report?.setFile(this.selectedFile);
  //   }
  // }

  addReport() {
    // this.formData.append('file', this.selectedFile as Blob);
    // this.http.post('http://localhost:8080/medical-report/save', this.report).subscribe((data) => {
    //   console.log('Report Added');
    // });

    console.log('hello World');
  }

  //
}
