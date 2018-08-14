import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { UserComponent } from './components/User/user.component';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/Register/register.component';

import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);