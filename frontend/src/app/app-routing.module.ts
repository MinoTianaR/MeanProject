import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';
import { ManagerVouchersComponent } from './pages/manager-vouchers/manager-vouchers.component';

const routes: Routes = [
  {
    path: 'dashboard', component: ManagerDashboardComponent
  },
  {
    path: 'vouchers', component: ManagerVouchersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
