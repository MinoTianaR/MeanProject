import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerSignupComponent } from './pages/customer-signup/customer-signup.component';
import { ManagerLoginComponent } from './pages/manager-login/manager-login.component';
import { ManagerSignupComponent } from './pages/manager-signup/manager-signup.component';
import { OfficerLoginComponent } from './pages/officer-login/officer-login.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';
import { OfficerDashboardComponent } from './pages/officer-dashboard/officer-dashboard.component';
import { CarInformationComponent } from './pages/car-information/car-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    AddCarComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    ManagerLoginComponent,
    ManagerSignupComponent,
    OfficerLoginComponent,
    CustomerDashboardComponent,
    ForgotPasswordComponent,
    ManagerDashboardComponent,
    OfficerDashboardComponent,
    CarInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
