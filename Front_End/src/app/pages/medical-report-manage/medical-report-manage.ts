import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-medical-report-manage',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './medical-report-manage.html',
  styleUrl: './medical-report-manage.css',
})
export class MedicalReportManage {}
