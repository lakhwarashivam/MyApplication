import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent},

  { path: 'logout', component: LogoutComponent},

  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },

  { path: 'users', component: UsersComponent , canActivate: [AuthGuard] }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
