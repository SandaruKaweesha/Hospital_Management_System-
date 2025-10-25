import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
