import { Routes } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
];
