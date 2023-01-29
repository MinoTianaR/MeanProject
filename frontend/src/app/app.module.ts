import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarViewComponent } from './pages/car-view/car-view.component';
import { CustomerRegistrationComponent } from './pages/customer-registration/customer-registration.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { OfficerComponent } from './pages/officer/officer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarViewComponent,
    CustomerRegistrationComponent,
    ManagerComponent,
    OfficerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
