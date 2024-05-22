import { Routes } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { DeportivosComponent } from './routes/eventos/deportivos/deportivos.component';
import { InstitucionalesComponent } from './routes/eventos/institucionales/institucionales.component';
import { CorporativosComponent } from './routes/eventos/corporativos/corporativos.component';

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
    {
        path: 'deportivos',
        component: DeportivosComponent,
    },
    {
        path: 'institucionales',
        component: InstitucionalesComponent,
    },
    {
        path: 'corporativos',
        component: CorporativosComponent,
    },
];
