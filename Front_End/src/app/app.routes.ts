import { Routes } from '@angular/router';
import { AppointmentManage } from './pages/appointment-manage/appointment-manage';
import { PatientManage } from './pages/patient-manage/patient-manage';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path:"",
        component:Login
    },
    {
        path: 'appointment',
        component :AppointmentManage  
    },
    {
        path: 'patient',
        component:PatientManage

    },
    {
        path:"dashboard",
        component:  Dashboard,
        children:[{
            path:"appointment",
            component:AppointmentManage
        },{
            path: 'patient',
        component:PatientManage 
        }]
    }

];
