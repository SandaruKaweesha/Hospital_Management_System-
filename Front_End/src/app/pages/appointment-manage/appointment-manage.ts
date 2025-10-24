import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Appoiment } from '../../model/Appointment';
import { map } from 'rxjs';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment-manage',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './appointment-manage.html',
  styleUrl: './appointment-manage.css',
})
export class AppointmentManage implements OnInit {
  ngOnInit(): void {}
}
