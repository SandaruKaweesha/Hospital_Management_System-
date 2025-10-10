import { Routes } from '@angular/router';
import { AppointmentManage } from './pages/appointment-manage/appointment-manage';
import { PatientManage } from './pages/patient-manage/patient-manage';

export const routes: Routes = [
    {
        path: 'appointment',
        component :AppointmentManage  
    },
    {
        path: 'patient',
        component:PatientManage

    }

];
