import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: LoginComponent},
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadComponent: () => import('./components/dashboard/dashboard.component'),
        pathMatch: 'full'
    },
    {
        path: 'incentive',
        canActivate: [AuthGuard], //Un guard para Incentivos
        loadComponent: () => import('./components/incentive/incentive.component'), 
        children: [
            { path: '', loadComponent: () => import('./components/incentive/incentive-list/incentive-list.component'), canActivate: [AuthGuard]},
            { path: 'awards', loadComponent: () => import('./components/incentive/awards/awards.component'), canActivate: [AuthGuard] }
        ]
    }
];
