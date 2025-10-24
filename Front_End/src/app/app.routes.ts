import { Routes } from '@angular/router';
import { AppointmentManage } from './pages/appointment-manage/appointment-manage';
import { PatientManage } from './pages/patient-manage/patient-manage';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { PatientAddForm } from './pages/patient-add-form/patient-add-form';
import { ViewPatients } from './pages/view-patients/view-patients';
import { ViewAppointment } from './pages/view-appointment/view-appointment';
import { AddAppointment } from './pages/add-appointment/add-appointment';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'appointment',
    component: AppointmentManage,
  },
  {
    path: 'patient',
    component: PatientManage,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'appointment',
        component: AppointmentManage,
        children: [
          {
            path: '',
            redirectTo: 'viewAppointment',
            pathMatch: 'full',
          },
          {
            path: 'viewAppointment',
            component: ViewAppointment,
          },
          {
            path: 'addform',
            component: AddAppointment,
          },
        ],
      },
      {
        path: 'patient',
        component: PatientManage,
        children: [
          {
            path: '',
            redirectTo: 'viewPatients',
            pathMatch: 'full',
          },
          {
            path: 'viewPatients',
            component: ViewPatients,
          },
          {
            path: 'addform',
            component: PatientAddForm,
          },
        ],
      },
    ],
  },
];
