import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashRootComponent } from './dash-root/dash-root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from './devices/devices.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, 
  children: [
    {path: '', component: DashRootComponent},
    {path: 'registerDevice', component: RegisterDeviceComponent},
    {path: 'devices', component: DevicesComponent},
    {path: 'experiments', component: ExperimentsComponent},
    {path: 'profile', component: ProfileComponent},



  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
