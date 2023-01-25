import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarViewComponent } from './pages/car-view/car-view.component';

const routes: Routes = [
  {
    path: '', component: CarViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
